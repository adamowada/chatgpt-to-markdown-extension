const turndownService = new TurndownService();

function getSelectedElements() {
  return document.querySelectorAll(".min-h-\\[20px\\]");
}

function getMarkdown(nodeList) {
  return Array.from(nodeList)
    .map((element) => element.outerText)
    .join("\n\n**\n\n");
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copy" || request.action === "download") {
    const elements = getSelectedElements();
    console.log(elements);
    const markdown = getMarkdown(elements);
    console.log(markdown);
    sendResponse({ markdown });
  }
});
