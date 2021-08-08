browser.contextMenus.create({
    id: 'menu-item-count-characters',
    title: browser.i18n.getMessage('countCharacters'),
    contexts: ['selection'],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId == 'menu-item-count-characters') {
        browser.notifications.create({
            type: 'basic',
            iconUrl: browser.runtime.getURL('icons/icon-48.png'),
            title: info.selectionText.length + ' ' + browser.i18n.getMessage('characters'),
            message: info.selectionText,
        });
    }
});
