import LZString from 'lz-string';

document.addEventListener('DOMContentLoaded', () => {
  const longerElement = document.getElementById('longer');
  const shorterElement = document.getElementById('shorter');
  const longerCountElement = document.getElementById('longer-count');
  const shorterCountElement = document.getElementById('shorter-count');
  const compressBtnElement = document.getElementById('compress-btn');
  const decompressBtnElement = document.getElementById('decompress-btn');
  compressBtnElement.addEventListener('click', () => {
    shorterElement.value = LZString.compressToEncodedURIComponent(longerElement.value);
    longerCountElement.innerHTML = `${longerElement.value.length} characters`;
    shorterCountElement.innerHTML = `${shorterElement.value.length} characters`;
  });
  decompressBtnElement.addEventListener('click', () => {
    shorterElement.value = LZString.decompressFromEncodedURIComponent(longerElement.value);
    longerCountElement.innerHTML = `${longerElement.value.length} characters`;
    shorterCountElement.innerHTML = `${shorterElement.value.length} characters`;
  });
  longerElement.addEventListener('input', (event) => {
    const content = event.target.value;
    longerCountElement.innerHTML = `${content.length} characters`;
  });
  shorterElement.addEventListener('input', (event) => {
    const content = event.target.value;
    shorterCountElement.innerHTML = `${content.length} characters`;
  });
});
