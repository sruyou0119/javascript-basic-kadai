const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const textOverWrite = document.getElementById('text');
    textOverWrite.textContent = 'ボタンをクリックしました';
});