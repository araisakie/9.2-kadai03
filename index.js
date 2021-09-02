"use strict";

/**
 * 引数を使って平均を出す
 */
class Student {
  avg(math, english) {
    console.log((math + english) / 2);
  }
}

const average = new Student();
average.name = "sato";
average.avg(80, 70);

console.log(average.name);

/**
 * 初期化メソッドを使用
 */
class Child {
  constructor(name) {
    this.name = name;
  }
  avg(math, english) {
    console.log((math + english) / 2);
  }
}

const Test = new Child("ito");
console.log(Test.name);

const Test2 = new Child("aota");
console.log(Test2.name);

/**
 * 上記の式をクラス式に変換
 */
const Child = class {
  constructor(name) {
    this.name = name;
  }
  avg(math, english) {
    console.log((math + english) / 2);
  }
};

const Test = new Child("ito");
console.log(Test.name);

const Test2 = new Child("aota");
console.log(Test2.name);

/**
 * これはなんと呼ぶでしょうか？
 *  const 『Test』 = new Child("ito");
 *   Test = インスタンス
 */

/**
 * これは何を呼び出しているでしょうか？
 *  const 『Test』 = new 『Child("ito")』;
 *  『Child("ito")』= クラス
 */

/**
 * この部分はなんというでしょうか？
 *  『constructor(name)』= コンストラクタ
 *
 */

/**
 * これは何を定義しているのでしょうか？
 *  『this.name = name;』=  プロパティ
 *
 */

/**
 * これはなんというでしょうか？
 *  average.『avg(80, 70)』;
 *   『avg(80, 70)』= メソッド
 */
