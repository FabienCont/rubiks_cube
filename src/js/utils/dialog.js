var dialogs = Array.from(document.querySelectorAll("dialog"))

const getDialogById = function(dialogId){
    return dialogs.find(dialog => dialog.dataset.id === dialogId)
}

const closeDialog = function(dialogId){
    var dialog = getDialogById(dialogId)
    dialog.close()
}

const showDialog = function(dialogId){
    var dialog = getDialogById(dialogId)
    dialog.showModal()
}

export {closeDialog,showDialog,getDialogById}