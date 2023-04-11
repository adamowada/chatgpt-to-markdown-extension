function getSelectedElements() {
  return document.querySelectorAll(".min-h-\\[20px\\]");
}

function formatMarkdown(element, index) {
  if (index % 2 === 0) {
    return `## Prompt:\n${element.outerText}\n\n## Response:`;
  }

  const responseArray = [];

  for (const node of element.childNodes[0].childNodes) {
    switch (node.localName) {
      case "pre":
        const code = node.childNodes[0].childNodes[0].childNodes[0].innerText;
        const language = node.childNodes[0].childNodes[1].innerText;
        responseArray.push(`\`\`\`${code}\n${language}\`\`\``);
        break;

      case "ol":
      case "ul":
        const bullet = node.localName === "ol" ? `${node.start}. ` : "- ";
        node.childNodes.forEach((li) => {
          responseArray.push(`${bullet}${li.innerText}`);
        });
        break;

      case "table":
        responseArray.push(node.outerHTML);
        break;

      default:
        responseArray.push(node.innerHTML);
        break;
    }
  }

  return responseArray.join("\n\n");
}

function getMarkdown(nodeList) {
  return Array.from(nodeList)
    .map(formatMarkdown)
    .join("\n\n");
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copy" || request.action === "download") {
    const elements = getSelectedElements();
    const markdown = getMarkdown(elements);
    sendResponse({ markdown });
  }
});
