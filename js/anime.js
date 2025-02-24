// script.js
// 設置 Cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// 獲取 Cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// // 主邏輯
// document.addEventListener('DOMContentLoaded', function() {
//   const introAnimation = document.querySelector('.intro-animation');
  
//   // 檢查是否已經有 playedAnimation Cookie
//   const hasPlayedAnimation = getCookie('playedAnimation');

//   if (!hasPlayedAnimation) {
//       // 如果是第一次訪問，播放動畫並設置 Cookie
//       introAnimation.style.opacity = "1"; // 顯示動畫
//       setCookie('playedAnimation', 'true', 1); // 設置7天有效期的 Cookie
//   } else {
//       // 如果不是第一次訪問，隱藏動畫部分
//       introAnimation.style.display = "none";
//   }
// });
