// フェード
const fade = document.querySelector('.fade');

const fadeKeyframes = {
  opacity: [0, 1],
}

const fadeOptions = {
  duration: 3000,
  easing: 'ease',
  fill: 'forwards',
}

fade.animate(fadeKeyframes, fadeOptions);

const fade1 = document.querySelector('.fade');

const fade1Keyframes = {
  opacity: [0, 1],
}

const fade1Options = {
  duration: 3000,
  easing: 'ease',
  fill: 'forwards',
}

fade.animate(fade1Keyframes, fade1Options);

const fade2 = document.querySelector('.fade2')

const fade2Keyframes = {
    opacity:[0,1]
}

const fade2Options = {
    duration: 2000,
    easing:'ease-in',
    //fill: 'forwards',
    direction:'alternate',
    iterations:Infinity,
}

fade2.animate(fade2Keyframes,fade2Options)

// 回転
const spin = document.querySelector('.spin');

const spinKeyframes = {
  rotate: ['x 360deg','x 0deg'],
  opacity: [0, 1],
}

const spinOptions = {
  duration: 2000,
  easing: 'ease',
}

spin.animate(spinKeyframes, spinOptions);

// 色の変更
const color = document.querySelector('.color');

const colorKeyframes = {
  backgroundColor: ['orange ','yellow ','lightgreen','skyblue'],
}

const colorOptions = {
  duration: 5000,
  direction: 'alternate',
  iterations: Infinity,
}

color.animate(colorKeyframes,colorOptions);

// 延びる背景
const line = document.querySelector('.line');

const lineKeyframes = {
  width: ['0','100%'],
  color: ['transparent','#FFF'],
}

const lineOptions = {
  duration: 2000,
  fill: 'forwards',
}

line.animate(lineKeyframes,lineOptions);

// スライドイン
const slide = document.querySelector('.slide-in');

const slideKeyframes = {
  opacity: [0, 1],
  translate: ['0 50px', 0],
};

const slideOptions = {
  duration: 1000,
  fill: 'forwards',
};

slide.animate(slideKeyframes,slideOptions);
