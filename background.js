chrome.runtime.onInstalled.addListener(() => {
    console.log("TabSwitcher extension Installed!")
});

function switchTabByName(tabname) {
    chrome.tabs.query({}, (tabs) => {
        for (let tab of tabs) {
            if (tab.title.toLowerCase().includes(tabname.toLowerCase())){
                chrome.tabs.update(tab.id, { active: true});
                break;
            }
        }
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.type === 'SWITCH_TAB'){
        switchTabByName(message.tabname)
    }
});