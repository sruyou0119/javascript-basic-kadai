const button = document.getElementById('ajax-btn');

function func1() {
    alert("func1");
}

function func2() {
    alert("func2");
}

//　無名関数 : 
const func3 = function () {
    alert("func3");
}

// ES6(2015)
// アロー関数
//const func4 = (data) => {
//    alert(data);
//}

const func5 = (func) => {
    func("FUNC6");
}

func5((data) => {
    //alert(data);
    console.log(data);
});

button.addEventListener('click', () => {
    alert("func5");
}); //　関数の定義の参照を渡す
