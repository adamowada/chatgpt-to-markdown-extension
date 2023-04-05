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
      let responseString = "";
      for (const node of element.childNodes[0].childNodes) {
        if (node.localName === "pre") {
          responseString += `\n\`\`\`${node.childNodes[0].childNodes[0].childNodes[0].innerText}
          ${node.childNodes[0].childNodes[1].innerText}
          \`\`\`\n`
        } else {
          responseString += node.innerText;
        }
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
