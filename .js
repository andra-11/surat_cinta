
  const heartEmojis = ['❤️', '💖', '💘', '💕'];
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(heart);
  }

  // Logika popup dan audio
  const envelope = document.getElementById('envelope');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const bgMusic = document.getElementById('bgMusic');
  loveSong.play().then(() => {
    console.log("Audio diputar");
  }).catch((err) => {
    alert("Klik sekali lagi jika audio tidak jalan: " + err);
  });


overlay.addEventListener("click", () => {
  popup.classList.remove("show");
  overlay.classList.remove("show");
  loveSong.pause();
  loveSong.currentTime = 0;
});
