chrome.commands.onCommand.addListener((command) => {
    if (command === 'command-count-characters') {
        chrome.tabs.executeScript(
            {
                code: 'window.getSelection().toString();',
            },
            function (result) {
                if (result[0].length === 0) {
                    return;
                }

                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: chrome.runtime.getURL('icons/icon-48.png'),
                    title: result[0].length + ' ' + chrome.i18n.getMessage('characters'),
                    message: result[0],
                });
            }
        );
    }
});
