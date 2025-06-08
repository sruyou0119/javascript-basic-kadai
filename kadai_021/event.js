const textChange = document.getElementById('text');

const pushBtn = document.getElementById('btn');

pushBtn.addEventListener('click', () => {
    setTimeout (() => {
        textChange.textContent = 'ボタンをクリックしました';
        alert("こんにちは")
    }, 2000);
});