console.log('jQuery.jsを読み込みました。');

$('#hogehoge').on('click', function() {
    console.log('クリックされました。');
 
    $('#hogehoge').animate({
     'fontSize': '64px',
     }).animate({
     'fontSize': '16px',
     })
 
 })

 $('#hogehoge2').on('click', function() {
    console.log('クリックされました。');
 
    $('#hogehoge2').animate({
     'fontSize': '64px',
     }).animate({
     'fontSize': '16px',
     })
 
 })