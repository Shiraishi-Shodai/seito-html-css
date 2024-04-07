particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

ScrollReveal().reveal('.section', { 
    dilay: 1000, //アニメーションが始まるまでの時間
//     viewOffset: {
//         top: 10,
//         right: 10,
//         bottom: 10,
//         left: 10,
//   },
    origin: 'bottom', //要素が出始める場所
    distance: "50px", //要素を表示したときの移動距離
    // easing: 'ease-in',
    duration: 1500, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true,   // 何回もアニメーション表示するか
});


// input:rangeに当てるCSSを設定
document.addEventListener('DOMContentLoaded', ()=> {
    const range = document.querySelector('.range');
    // Trackの元の色
    const baseColor = "gray";
    // Trackのつまみの左側の色
    const activeColor = "#333";

    const updateSlider = (slider)=>{
        console.log(slider);
        // max値が設定されていな時は5を設定
        if(!slider.max) {
            slider.max = 4;
        }

        // 現在の値から割合を取得
        const progress = (slider.value / slider.max) * 100;
        console.log(progress);
        slider.style.background =  `linear-gradient(to right, ${activeColor} ${progress}%, ${baseColor} ${100 - progress}%)`;
    }

    // input イベントのリスナーを設定
    range.addEventListener('input', (e) => {
      // updateSlider を呼び出す
      updateSlider(e.target);
    });
    // updateSlider を実行して現在の値を反映
    updateSlider(range);

})