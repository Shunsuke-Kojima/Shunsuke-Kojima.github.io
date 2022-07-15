function janken(myHand) {

    //じゃんけん手を格納する配列
    let handArray = ['グー','チョキ','パー'];

    //プレイヤー手は引数のmyHandに入っている
    console.log('プレイヤーの手は、' + handArray[myHand]);

    //コンピューターの手をランダムに決める
    //Math.random()は、0以上1未満の疑似乱数分布から1つ値を返す
    let rand = Math.random() * 100;
    console.log(rand);

    //Math.floor()は、与えられた因数以下の最大の整数を返す
    let rand_int = Math.floor(rand);
    console.log(rand_int);

    //じゃんけん手は3パターンなので、3で割った余りをコンピュータの手とする
    let computerHand = rand_int % 3;
    console.log('コンピュータの手は、' + handArray[computerHand]);

    //結果を入れる変数
    let result = 0;
    //結果の文字列を格納する変数
    let resultText = ['あいこです。','あなたの負けです。','あなたの勝ちです。'];

    //勝ち負けを判定する
    //    if (myHand === 0) {
    //        if (computerHand === 0){
    //            result = 0 ;
    //        } else if (computerHand === 1) {
    //            result = 2 ;
    //        } else if (computerHand === 2) {
    //            result = 1 ;
    //        }
    //    } else if (myHand === 1) {
    //        if (computerHand === 0){
    //            result = 1 ;
    //        } else if (computerHand === 1) {
    //            result = 0 ;
    //        } else if (computerHand === 2) {
    //            result = 2 ;
    //        }
    //    } else if (myHand === 2) {
    //        if (computerHand === 0){
    //            result = 2 ;
    //        } else if (computerHand === 1) {
    //            result = 1 ;
    //        } else if (computerHand === 2) {
    //            result = 0 ;
    //        }
    //    } 

    //if文を書かなくてもじゃんけんは実装できる
    result = (myHand - computerHand + 3) % 3;

    //勝敗をコンソールに表示する
    console.log(resultText[result]);

    //HTMLに勝敗を表示する
    //const result_p = document.querySelector('#janken-result');
    //result_p.textContent = resultText[result];

    $('#janken-result').text('あなたの手は' + handArray[myHand] + '、コンピュータの手は' + handArray[computerHand] + '、なので、' + resultText[result])

}