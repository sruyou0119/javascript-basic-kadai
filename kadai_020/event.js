const clickBtn = document.getElementById('btn');
const textOverWrite = document.getElementById('text'); 

clickBtn.addEventListener('click', () => {
    textOverWrite.textContent = 'ボタンをクリックしました';
});