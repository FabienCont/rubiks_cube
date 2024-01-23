const getLocalStorageItem = function (name) {
    try{
        var item = localStorage.getItem(name)
        if(!item) return ;
        return JSON.parse(localStorage.getItem(name));
    }
    catch(err){
        console.error("failed to parse localStorage")
    }
}

const setLocalStorageItem = function (name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export { getLocalStorageItem, setLocalStorageItem }