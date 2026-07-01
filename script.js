// 3D-Blahaj
const shark = document.getElementById('shark-model');

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;
    let translateY = scrollValue * 0.7;
    let rotateX = scrollValue * 0.7;
    shark.style.transform = `translateY(${translateY}px) rotateX(${rotateX}deg)`;
    shark.style.opacity = 1 - (scrollValue / 800);
});

// Lightbox
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxSource = document.getElementById('lightbox-source');

const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showImage(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    
    currentIndex = index;
    const item = galleryItems[currentIndex];
    
    lightboxImg.src = item.getAttribute('data-full');
    lightboxTitle.textContent = item.getAttribute('data-title');
    lightboxSource.href = item.getAttribute('data-source');
    lightboxSource.textContent = "Source / Credit";
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        showImage(index);
    });
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'Escape') lightbox.style.display = 'none';
    }
});