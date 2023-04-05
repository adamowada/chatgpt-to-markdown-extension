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
            "```" +
            node.childNodes[0].childNodes[0].childNodes[0].innerText +
            "\n" +
            node.childNodes[0].childNodes[1].innerText +
            "```" +
            "\n\n";
        } else if (node.localName === "ol") {
          for (const li of node.childNodes) {
            responseString += `${node.start}. ` + li.innerText + "\n\n";
          }
        } else if (node.localName === "ul") {
          for (const li of node.childNodes) {
            responseString += "- " + li.innerText + "\n\n";
          }
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
    console.log(elements);
    const markdown = getMarkdown(elements);
    console.log(markdown);
    sendResponse({ markdown });
  }
});
