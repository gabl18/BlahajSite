// 3D-Blahaj
const shark = document.getElementById('shark-model');

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;
    let translateY = scrollValue * 0.7;
    let rotateX = scrollValue * 0.7;
    shark.style.transform = `translateY(${translateY}px) rotateX(${rotateX}deg)`;
    shark.style.opacity = 1 - (scrollValue / 800);
});