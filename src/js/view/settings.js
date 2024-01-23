import { parseColorCss, alphaFloatToHex,getRandomColor,getRandomAlpha} from "js/utils/color"
import { showDialog, closeDialog, getDialogById } from "js/utils/dialog"
import { addEventListenerToNode, block_event } from "js/utils/domEventHelper"
import { setCssVariable, getCssVariable } from "js/utils/varCssHelper"
import { getLocalStorageItem, setLocalStorageItem } from "js/utils/localStorage"
import { addInputListenerToNode } from "js/utils/domEventHelper"
import { getRandomColor2, getRandomFactor } from "../utils/color"

const alphaMaxValue = 255.0
const colorLocalStorageKey = "settings"
const dialog = getDialogById("settings")
const closeButton = dialog.querySelector(".close-dialog")
const randomizeButton = dialog.querySelector(".randomize-btn")
const inputsColor = dialog.querySelectorAll(".input-color")
const inputsRangeAlpha = Array.from(dialog.querySelectorAll(".input-alpha"))
const inputsRangeSpacing = Array.from(dialog.querySelectorAll(".input-spacing"))
const saveButton = dialog.querySelector(".dialog-settings-btn-save")
const resetButton = dialog.querySelector(".dialog-settings-btn-reset")
const defaultValues = {}
const initSettings = function () {
    initClickClose()
    initClickRandomize()
    initClickReset()
    initClickSave()
    listentRangeUpdate()
    saveDefaultValues()
    loadSavedSettings()
}

const loadSavedSettings = function () {
    var settings = getLocalStorageItem(colorLocalStorageKey)
    if (settings) {
        inputsColor.forEach(input => {
            let nameCss = getCssVariableNameById(input.id)
            let colorInfo = settings[nameCss]
            if (colorInfo) {
                setCssColor(nameCss, colorInfo)
                input.value = colorInfo.color
                setInputColorAlphaValue(input.id, colorInfo.alpha || alphaMaxValue)
            }
        })
        inputsRangeSpacing.forEach(input => {
            let nameCss = getCssVariableNameById(input.id)
            let spacingValue = settings[nameCss]
            if (spacingValue) {
                setCssSpacing(nameCss, spacingValue,input.dataset.unit)
                input.value = spacingValue
                updateInputRangeOutput(input,input.dataset.unit)
            }
        })
    }
}

const listentRangeUpdate = function () {
    inputsRangeSpacing.forEach(input => {
        addInputListenerToNode(input, updateRangeOutputOnInput)
    })
}

const updateRangeOutputOnInput = function (event) {
    updateInputRangeOutput(event.target,event.target.dataset.unit)
}

const updateInputRangeOutput = function (input,unit) {
   input.previousElementSibling.value = input.value+unit
}

const setCssSpacing = function (nameCss, spacingInfo,unit) {
    setCssVariable(nameCss, spacingInfo + unit)
}

const setCssColor = function (nameCss, colorInfo) {
    setCssVariable(nameCss, colorInfo.color + alphaFloatToHex(Number(colorInfo.alpha)))
}
const setColorInfo = function (colorDico, colorId, colorHex, alphaFloat) {
    colorDico[colorId] = { color: colorHex, alpha: Number(alphaFloat) }
}

const setSpacingInfo = function (spacingDico, spacingId, spacingValue) {
    spacingDico[spacingId] = spacingValue
}

const saveSettingsToLocalStorage = function (colors) {
    setLocalStorageItem(colorLocalStorageKey, colors)
}

const initClickClose = function () {
    addEventListenerToNode(closeButton, closeSettings)
}

const initClickSave = function () {
    addEventListenerToNode(saveButton, save)
}

const initClickRandomize = function () {
    addEventListenerToNode(randomizeButton, randomize)
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

const getRangeInputAlphaByColorId = function (colorInputId) {
    return inputsRangeAlpha.find(input => input.id === colorInputId + "-alpha")
}
const getInputColorAlphaValue = function (colorInputId) {
    return getRangeInputAlphaByColorId(colorInputId).value
}
const setInputColorAlphaValue = function (colorInputId, value) {
    getRangeInputAlphaByColorId(colorInputId).value = Number(value)
}

const setDefaultValueColor = function (nameCss, colorValue, alpha) {
    setColorInfo(defaultValues, nameCss, colorValue, alpha)
}
const setDefaultValueSpacing = function (nameCss, value) {
    setSpacingInfo(defaultValues, nameCss, value)
}
const getDefaultValueByCssName = function (nameCss) {
    return defaultValues[nameCss]
}

const saveDefaultValues = function () {
    inputsColor.forEach(input => {
        var nameCss = getCssVariableNameById(input.id)
        var colorValue = getCssVariable(nameCss)
        setDefaultValueColor(nameCss, parseColorCss(colorValue), alphaMaxValue)
    });
    inputsRangeSpacing.forEach(input => {
        let nameCss = getCssVariableNameById(input.id)
        var spacingValue = getCssVariable(nameCss)
        setDefaultValueSpacing(nameCss, parseInt(spacingValue))
    })
}

const randomize = function(){
    var randomFactor=getRandomFactor()
    inputsColor.forEach((input,i) => {
        var nameCss = getCssVariableNameById(input.id)
        var color= getRandomColor2(randomFactor,i,6)
        var alpha = getRandomAlpha()
        var colorInfo = {color,alpha}
        setCssColor(nameCss, colorInfo)
        input.value = colorInfo.color
        setInputColorAlphaValue(input.id, colorInfo.alpha || alphaMaxValue)
    });
}

const save = function (event) {
    var settings = {}
    inputsColor.forEach(input => {
        var alphaValue = getInputColorAlphaValue(input.id)
        var nameCss = getCssVariableNameById(input.id)
        setColorInfo(settings, nameCss, input.value, alphaValue)
        setCssColor(nameCss, settings[nameCss])
    })
    inputsRangeSpacing.forEach(input => {
        let nameCss = getCssVariableNameById(input.id)
        setSpacingInfo(settings, nameCss, input.value)
        setCssSpacing(nameCss, settings[nameCss],input.dataset.unit)
    })
    saveSettingsToLocalStorage(settings)
    closeSettings()
    return block_event(event)
}

const getCssVariableNameById = (id) => {
    return `--${id}0`
}

const reset = function (event) {
    inputsColor.forEach(input => {
        var nameCss = getCssVariableNameById(input.id)
        let colorInfo = getDefaultValueByCssName(nameCss)
        setCssColor(nameCss, colorInfo)
        input.value = colorInfo.color
        setInputColorAlphaValue(input.id, alphaMaxValue)
    })
    inputsRangeSpacing.forEach(input => {
        let nameCss = getCssVariableNameById(input.id)
        let spacingValue = getDefaultValueByCssName(nameCss)
        setCssSpacing(nameCss, spacingValue)
        input.value = "" + parseInt(spacingValue)
        updateInputRangeOutput(input,input.dataset.unit)
    })
    return block_event(event)
}

export { openSettings, initSettings }