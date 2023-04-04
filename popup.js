async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

function downloadMarkdown(text) {
  const blob = new Blob([text], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'content.md';
  link.click();
  URL.revokeObjectURL(url);
}

document.getElementById('copyButton').addEventListener('click', async () => {
  chrome.runtime.sendMessage({ action: 'copy' }, async (response) => {
    await copyToClipboard(response.markdown);
  });
});

document.getElementById('downloadButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'download' }, (response) => {
    downloadMarkdown(response.markdown);
  });
});
