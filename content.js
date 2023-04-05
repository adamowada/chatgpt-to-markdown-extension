const turndownService = new TurndownService();

function getSelectedElements() {
  return document.querySelectorAll(".min-h-\\[20px\\]");
}

function getMarkdown(nodeList) {
  return Array.from(nodeList)
    .map((element, i) => {
      if (i % 2 == 0) {
        return "## " + element.outerText; 
      }
      for (const node of element.childNodes[0].childNodes) {
        console.log(node.outerText);
      }
      return element.outerText;
    })
    .join("\n\n");
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
