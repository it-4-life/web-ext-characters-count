chrome.contextMenus.create({
    id: 'menu-item-count-characters',
    title: chrome.i18n.getMessage('countCharacters'),
    contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId == 'menu-item-count-characters') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: chrome.runtime.getURL('icons/icon-48.png'),
            title: info.selectionText.length + ' ' + chrome.i18n.getMessage('characters'),
            message: info.selectionText,
        });
    }
});
