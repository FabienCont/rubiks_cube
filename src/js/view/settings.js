import { parseColorCss } from "js/utils/color"
import { showDialog, closeDialog, getDialogById } from "js/utils/dialog"
import { addEventListenerToNode, block_event } from "js/utils/domEventHelper"
import { setCssVariable, getCssVariable } from "js/utils/varCssHelper"
import { getLocalStorageItem,setLocalStorageItem } from "js/utils/localStorage"

const colorLocalStorageKey = "colors-settings"
const dialog = getDialogById("settings")
const closeButton = dialog.querySelector(".close-dialog")
const inputsColor = dialog.querySelectorAll(".input-color")
const saveButton = dialog.querySelector(".dialog-settings-btn-save")
const resetButton = dialog.querySelector(".dialog-settings-btn-reset")
const defaultValues = {}
const initSettings = function () {
    initClickClose()
    initClickReset()
    initClickSave()
    saveDefaultValues()
    loadSavedSettings()
}

const loadSavedSettings = function(){
    var colors = getLocalStorageItem(colorLocalStorageKey)
    if (colors){
        inputsColor.forEach(input => {
            var nameCss = getCssVariableNameById(input.id)
            if(colors[nameCss]){
                setCssVariable(nameCss, colors[nameCss])
            }
        })
    }
}

const saveColorsToLocalStorage=function(colors){
    setLocalStorageItem(colorLocalStorageKey,colors)
}

const initClickClose = function () {
    addEventListenerToNode(closeButton, closeSettings)
}

const initClickSave = function () {
    addEventListenerToNode(saveButton, save)
}

const initClickReset = function () {
    addEventListenerToNode(resetButton, reset)
}
const closeSettings = function () {
    closeDialog("settings")
}

const openSettings = function () {
    showDialog("settings")
}

const saveDefaultValues = function () {
    inputsColor.forEach(input => {
        var nameCss = getCssVariableNameById(input.id)
        var value =getCssVariable(nameCss)
        defaultValues[nameCss] = parseColorCss(value)
    });
}

const save = function () {
    var colors= {}
    inputsColor.forEach(input => {
        var nameCss = getCssVariableNameById(input.id)
        setCssVariable(nameCss, input.value)
        colors[nameCss] = input.value
    })
    saveColorsToLocalStorage(colors)
    closeSettings()
    return block_event(event)
}

const getCssVariableNameById = (id) => {
    return `--${id}0`
}

const reset = function () {
    inputsColor.forEach(input => {
        var nameCss = getCssVariableNameById(input.id)
        let value = defaultValues[nameCss]
        setCssVariable(nameCss, value)
        input.value = value
    })
    return block_event(event)
}

export { openSettings, initSettings }