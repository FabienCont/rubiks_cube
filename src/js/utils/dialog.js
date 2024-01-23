
var dialogIdDisplayed = null
var dialogs = Array.from(document.querySelectorAll("dialog"))

const getDialogById = function(dialogId){
    return dialogs.find(dialog => dialog.dataset.id === dialogId)
}

const closeDialog = function(dialogId){
    if(dialogIdDisplayed !== dialogId) return 
    var dialog = getDialogById(dialogId)
    dialog.close()
    dialogIdDisplayed = null;    
}

const showDialog = function(dialogId){
    if(dialogIdDisplayed){
        return
    }
    var dialog = getDialogById(dialogId)
    dialog.showModal()
    dialogIdDisplayed = dialogId
}

export {closeDialog,showDialog,getDialogById}