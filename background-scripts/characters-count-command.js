browser.commands.onCommand.addListener((command) => {
    if (command === 'command-count-characters') {
        browser.tabs
            .query({ active: true, currentWindow: true })
            .then((tabs) => browser.tabs.get(tabs[0].id))
            .then((tab) => {
                browser.tabs.sendMessage(tab.id, { type: 'COUNT_CHARACTERS' }).then((response) => {
                    browser.notifications.create({
                        type: 'basic',
                        iconUrl: browser.runtime.getURL('icons/icon-48.png'),
                        title: response.selectionText.length + ' ' + browser.i18n.getMessage('characters'),
                        message: response.selectionText,
                    });
                });
            });
    }
});
