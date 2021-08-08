browser.runtime.onMessage.addListener((request) => {
    if (request.type === 'COUNT_CHARACTERS') {
        var activeElement = document.activeElement;
        var inputs = ['input', 'textarea'];

        let selection = '';
        if (activeElement && inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1) {
            selection = activeElement.value.substring(activeElement.selectionStart, activeElement.selectionEnd);
        } else {
            selection = window.getSelection().toString();
        }

        return Promise.resolve({ selectionText: selection });
    }
});
