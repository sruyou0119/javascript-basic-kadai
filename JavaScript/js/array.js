const userNames = ['侍太郎', '侍一郎', '侍二郎', '侍三郎', '侍四郎'];

// 2番目の要素である「侍一郎」という文字列が出力される
console.log(userNames[1]);

userNames[1] = "侍花子";
userNames[5] = "侍五郎";
userNames[userNames.length] = "侍六郎";
userNames[userNames.length] = "侍七郎";

userNames.push("侍八郎");

console.log(userNames);

