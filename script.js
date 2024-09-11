// 変数を宣言して値を出力
let message = "Hello, World!";
console.log(message);

// 条件に応じて異なるメッセージを表示
let number = 10;
if (number > 5) {
    console.log("5より大きいです");
} else {
    console.log("5以下です");
}

// 1から5までの数を表示
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 引数を受け取って計算する関数
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

// 配列の要素を一つずつ表示
let fruits = ["りんご", "バナナ", "ぶどう"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// オブジェクトのプロパティを扱う
let person = {
    name: "太郎",
    age: 25,
    greet: function() {
        console.log("こんにちは、" + this.name + "です");
    }
};

person.greet();