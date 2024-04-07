particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
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