({
    handleCancel : function(component, event, helper) {
        //closes the modal or popover from the component
        var appEvent = $A.get("e.c:OverlayLibraryModalEvent");
        appEvent.setParams({
            "message" : "Rejected" });
        appEvent.fire();
        component.find("overlayLib").notifyClose();
    },
    handleOK : function(component, event, helper) {
        //do something
         if(!component.get("v.comments") && component.get("v.showCommentBox")){
            component.set("v.validity", false);
        }
        else{
            var comments = component.get("v.comments");
             var appEvent = $A.get("e.c:OverlayLibraryModalEvent");
        //alert('method in chile'+component.get("v.statusMessage"));
        appEvent.setParams({
            "message" : component.get("v.statusMessage"),
            "comments": comments
        });
        appEvent.fire();
        component.find("overlayLib").notifyClose();
        }
        
       
    }
})