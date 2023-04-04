import TurndownService from 'turndown';

const turndownService = new TurndownService();

function getSelectedElements() {
  return [...document.querySelectorAll('.min-h-\\[20px\\]')];
}

function getMarkdown(elements) {
  return elements.map((element) => turndownService.turndown(element.outerHTML)).join('\n\n');
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'copy' || request.action === 'download') {
    const elements = getSelectedElements();
    const markdown = getMarkdown(elements);
    sendResponse({ markdown });
  }
});
