({
    // ## function call on component load  
    loadContactList: function(component, event, helper){
       
       helper.onLoad(component, event);
        
    },
    
    // ## function call on Click on the "Download As CSV" Button. 
    downloadCsv : function(component,event,helper){
         helper.init(component, event);
         component.set("v.isModalOpen", true);
        },
    ok : function(component,event,helper){
        
        // get the Records [contact] list from 'ListOfContact' attribute 
        var stockData = component.get("v.ListOfContact");
       
        // call the helper function which "return" the CSV data as a String   
        var csv = helper.convertArrayOfObjectsToCSV(component,stockData);   
         if (csv == null){return;} 
        
        // ####--code for create a temp. <a> html tag [link tag] for download the CSV file--####     
	     var hiddenElement = document.createElement('a');
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
          hiddenElement.target = '_self'; // 
          hiddenElement.download = 'ExportData.csv';  // CSV file Name* you can change it.[only name not .csv] 
          document.body.appendChild(hiddenElement); // Required for FireFox browser
    	  hiddenElement.click(); // using click() js function to download csv file
        component.set("v.isModalOpen", false);
    },
   closeModel: function(component, event, helper) {
      // Set isModalOpen attribute to false  
      component.set("v.isModalOpen", false);
   },
    handleSaveEdition: function (component, event, helper) {
        alert('shgdvshds');
        var editedRecords = component.find("contactDataTable").get("v.draftValues");
        var totalRecordEdited = editedRecords.length;
        alert(JSON.stringify(editedRecords));
        console.log(editedRecords);
        var action = component.get("c.updateContact");
        action.setParams({"cons" : editedRecords});
        action.setCallback(this, function(response) {
            var state = response.getState();
            $A.get('e.force:refreshView').fire();
            
        });
        $A.enqueueAction(action);
        
    },
   })