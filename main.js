const kuku_data = [
    {pic: './img/11.png', ans: './img/001.png'},
    {pic: './img/12.png', ans: './img/002.png'},
    {pic: './img/13.png', ans: './img/003.png'},
    {pic: './img/14.png', ans: './img/004.png'},
    {pic: './img/15.png', ans: './img/005.png'},
    {pic: './img/16.png', ans: './img/006.png'},
    {pic: './img/17.png', ans: './img/007.png'},
    {pic: './img/18.png', ans: './img/008.png'},
    {pic: './img/19.png', ans: './img/009.png'},
    {pic: './img/21.png', ans: './img/002.png'},
    {pic: './img/22.png', ans: './img/004.png'},
    {pic: './img/23.png', ans: './img/006.png'},
    {pic: './img/24.png', ans: './img/008.png'},
    {pic: './img/25.png', ans: './img/010.png'},
    {pic: './img/26.png', ans: './img/012.png'},
    {pic: './img/27.png', ans: './img/014.png'},
    {pic: './img/28.png', ans: './img/016.png'},
    {pic: './img/29.png', ans: './img/018.png'},
    {pic: './img/31.png', ans: './img/003.png'},
    {pic: './img/32.png', ans: './img/006.png'},
    {pic: './img/33.png', ans: './img/090.png'},
    {pic: './img/34.png', ans: './img/012.png'},
    {pic: './img/35.png', ans: './img/015.png'},
    {pic: './img/36.png', ans: './img/018.png'},
    {pic: './img/37.png', ans: './img/021.png'},
    {pic: './img/38.png', ans: './img/024.png'},
    {pic: './img/39.png', ans: './img/027.png'},
    {pic: './img/41.png', ans: './img/004.png'},
    {pic: './img/42.png', ans: './img/008.png'},
    {pic: './img/43.png', ans: './img/012.png'},
    {pic: './img/44.png', ans: './img/016.png'},
    {pic: './img/45.png', ans: './img/020.png'},
    {pic: './img/46.png', ans: './img/024.png'},
    {pic: './img/47.png', ans: './img/028.png'},
    {pic: './img/48.png', ans: './img/032.png'},
    {pic: './img/49.png', ans: './img/036.png'},
    {pic: './img/51.png', ans: './img/005.png'},
    {pic: './img/52.png', ans: './img/010.png'},
    {pic: './img/53.png', ans: './img/015.png'},
    {pic: './img/54.png', ans: './img/020.png'},
    {pic: './img/55.png', ans: './img/025.png'},
    {pic: './img/56.png', ans: './img/030.png'},
    {pic: './img/57.png', ans: './img/035.png'},
    {pic: './img/58.png', ans: './img/040.png'},
    {pic: './img/59.png', ans: './img/045.png'},
    {pic: './img/61.png', ans: './img/006.png'},
    {pic: './img/62.png', ans: './img/012.png'},
    {pic: './img/63.png', ans: './img/018.png'},
    {pic: './img/64.png', ans: './img/024.png'},
    {pic: './img/65.png', ans: './img/030.png'},
    {pic: './img/66.png', ans: './img/036.png'},
    {pic: './img/67.png', ans: './img/042.png'},
    {pic: './img/68.png', ans: './img/048.png'},
    {pic: './img/69.png', ans: './img/054.png'},
    {pic: './img/71.png', ans: './img/007.png'},
    {pic: './img/72.png', ans: './img/014.png'},
    {pic: './img/73.png', ans: './img/021.png'},
    {pic: './img/74.png', ans: './img/028.png'},
    {pic: './img/75.png', ans: './img/035.png'},
    {pic: './img/76.png', ans: './img/042.png'},
    {pic: './img/77.png', ans: './img/049.png'},
    {pic: './img/78.png', ans: './img/056.png'},
    {pic: './img/79.png', ans: './img/063.png'},
    {pic: './img/81.png', ans: './img/008.png'},
    {pic: './img/82.png', ans: './img/016.png'},
    {pic: './img/83.png', ans: './img/024.png'},
    {pic: './img/84.png', ans: './img/032.png'},
    {pic: './img/85.png', ans: './img/040.png'},
    {pic: './img/86.png', ans: './img/048.png'},
    {pic: './img/87.png', ans: './img/056.png'},
    {pic: './img/88.png', ans: './img/064.png'},
    {pic: './img/89.png', ans: './img/072.png'},
    {pic: './img/91.png', ans: './img/009.png'},
    {pic: './img/92.png', ans: './img/018.png'},
    {pic: './img/93.png', ans: './img/027.png'},
    {pic: './img/94.png', ans: './img/036.png'},
    {pic: './img/95.png', ans: './img/045.png'},
    {pic: './img/96.png', ans: './img/054.png'},
    {pic: './img/97.png', ans: './img/063.png'},
    {pic: './img/98.png', ans: './img/072.png'},
    {pic: './img/99.png', ans: './img/081.png'},
];

window.addEventListener('DOMContentLoaded', function() {
    
    let nextQ = document.querySelector('#nextQuestion');
    let obj = kuku_data[Math.floor( Math.random() * kuku_data.length)];
     const touchArea = document.getElementById('touch-area');
    
    let html01 = '<img src=' + obj.pic + '>';
    let html02 = '<img src=' + obj.ans + '>';
    document.querySelector('#output01').innerHTML = html01;
    document.querySelector('#output02').innerHTML = '';

    // タッチ操作をしたときの処理を追加
    touchArea.addEventListener('touchstart', function() {
	document.querySelector('#output02').innerHTML = html02;
    });
    touchArea.addEventListener('touchmove', function() {
	event.preventDefault();  // スクロール操作禁止
	document.querySelector('#output02').innerHTML = html02;
    });
    touchArea.addEventListener('touchend', function() {
	document.querySelector('#output02').innerHTML = '';
    });
    touchArea.addEventListener('touchcancel', function() {
	document.querySelector('#output02').innerHTML = '';
    });

    // ボタンをクリックしたときの処理を追加
    nextQ.addEventListener('click', function() {
	obj = kuku_data[Math.floor( Math.random() * kuku_data.length)];
	html01 = '<img src=' + obj.pic + '>';
	html02 = '<img src=' + obj.ans + '>';
	document.querySelector('#output01').innerHTML = html01;
    });
    
}); // End window.addEventListener

