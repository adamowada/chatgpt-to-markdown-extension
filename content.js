function getSelectedElements() {
  return document.querySelectorAll(".min-h-\\[20px\\]");
}

function getMarkdown(nodeList) {
  return Array.from(nodeList)
    .map((element, i) => {
      if (i % 2 == 0) {
        return "## Prompt: " + element.outerText; 
      }
      let responseString = "";
      for (const node of element.childNodes[0].childNodes) {
        if (node.localName === "pre") {
          responseString += 
`\`\`\`${node.childNodes[0].childNodes[0].childNodes[0].innerText}
${node.childNodes[0].childNodes[1].innerText}
\`\`\`` + "\n\n";
        // } else if (node.localName === "ol") {
        //   for (const li of )
        //   responseString += node.innerHTML + "\n\n";
        // } else {
        } else {  
          responseString += node.innerHTML + "\n\n";
        }
      }
      return responseString;
    })
    .join("\n\n");
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copy" || request.action === "download") {
    const elements = getSelectedElements();
    const markdown = getMarkdown(elements);
    sendResponse({ markdown });
  }
});

