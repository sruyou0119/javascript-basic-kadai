const js = "    JavaScriptメソッドチェーン   ";

//const str1 = js.trim();
//const str2 = js.toUpperCase();
//const str3 = str2.replace("メソッド", "method");

const str4 = js.trim()
        .toUpperCase()
        .replace("メソッド", "method");
        
console.log(js);
console.log(str4);