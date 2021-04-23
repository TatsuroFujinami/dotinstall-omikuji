'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.01) {
      btn.textContent = '大吉';
    } else if (n < 0.03) {
      btn.textContent = '吉';
    } else if (n < 0.07) {
      btn.textContent = '中吉';
    } else if (n < 0.15) {
      btn.textContent = '小吉';
    } else if (n < 0.3) {
      btn.textContent = '末吉';
    } else if (n < 0.6) {
      btn.textContent = '凶';
    } else {
      btn.textContent = '大凶';
    }
  });
}