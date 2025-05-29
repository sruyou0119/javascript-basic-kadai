const textChange = document.getElementById('text');

const pushBtn = document.getElementById('btn');

pushBtn.addEventListener('click', () => {
    setTimeout (() => {
        textChange.textContent = 'ボタンをクリックしました';
    }, 2000);
});