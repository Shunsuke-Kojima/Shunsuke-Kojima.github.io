console.log('chart.jsを読み込みました。');

//ラベル
const labels = [
    '出生時',
    '小学校時代',
    '中学校時代',
    '高校時代',
    '大学時代',
];

//グラフデータ(カンマでデータ増やせる)
const data = {
    labels: labels,
    datasets: [{
        label: '人生満足度',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 30, 30, 60, 75],
    }]
};

//コンフィグ
const config = {
    type: 'line',
    data: data,
    options: {}
};

//グラフをcanvasタグに描画する（ID名で場所指定）
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
