document.getElementById('scrape-button').addEventListener('click', async () => {
    const url = document.getElementById('url-input').value;
    const result = await window.electronAPI.startScraping(url);
  
    document.getElementById('result').innerText = `Title: ${result.title}\nContent: ${result.content}`;
  });
  