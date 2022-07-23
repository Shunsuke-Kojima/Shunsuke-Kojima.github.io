console.log('Hello World!');

function selfintro(language) {
    
    let message = '';

    if (language === 1) {
        message = '小学校時代のボタンがクリックされました。';
    } else if (language === 2) {
        message = '中学校時代のボタンがクリックされました。';
    } else if (language === 3) {
        message = '高校時代のボタンがクリックされました。';
    } else if (language === 4) {
        message = '大学時代のボタンがクリックされました。';
    } else {
        message = '予期されていないクリックが発生しました。';
    }
    console.log(message);

    

    return message;
}
