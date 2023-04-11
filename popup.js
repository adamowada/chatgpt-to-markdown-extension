function getCurrentDateTime() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  return `${mm}${dd}${yyyy}_${hh}${min}${ss}`;
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");
    document.getElementById("copyButton").innerText = "☑️ Copied!";
  } catch (err) {
    document.getElementById("copyButton").innerText = "Copy Fail :(";
    console.error("Failed to copy text: ", err);
  }
}

function downloadMarkdown(text, fileName) {
  const blob = new Blob([text], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.md`;
  link.click();
  URL.revokeObjectURL(url);
  document.getElementById("downloadButton").innerText = "☑️ Downloaded!";
}

document.getElementById("fileName").value = getCurrentDateTime();

document.getElementById("copyButton").addEventListener("click", async () => {
  chrome.runtime.sendMessage({ action: "copy" }, async (response) => {
    await copyToClipboard(response.markdown);
  });
});

document.getElementById("fileNameForm").addEventListener("submit", (e) => {
  e.preventDefault();
  chrome.runtime.sendMessage({ action: "download" }, (response) => {
    downloadMarkdown(response.markdown, e.target.fileName.value);
  });
})
