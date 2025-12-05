// Gallery Modal Functionality
const sampleImages = [
    'assets/sample-1.png',
    'assets/sample-2.png',
    'assets/sample-3.png',
    'assets/sample-4.png',
    'assets/sample-5.png',
    'assets/sample-6.png',
    'assets/sample-7.png',
    'assets/sample-8.png',
    'assets/sample-9.png',
    'assets/sample-10.png',
    'assets/sample-11.png',
    'assets/sample-12.png',
    'assets/sample-13.png',
    'assets/sample-14.png',
    'assets/sample-15.png',
    'assets/sample-16.png',
    'assets/sample-17.png',
    'assets/sample-18.png',
    'assets/sample-19.png',
    'assets/sample-20.png',
    'assets/sample-21.png',
    'assets/sample-22.png',
    'assets/sample-23.png',
    'assets/sample-24.png',
    'assets/sample-25.png',
    'assets/sample-26.png',
    'assets/sample-27.png',
    'assets/sample-28.png',
    'assets/sample-29.png',
    'assets/sample-30.png',
    'assets/sample-31.png',
    'assets/sample-32.png',
    'assets/sample-33.png',
    'assets/sample-34.png',
    'assets/sample-35.png',
    'assets/sample-36.png',
    'assets/sample-37.png',
    'assets/sample-40.png',
    'assets/sample-41.png',
    'assets/sample-42.png',
    'assets/sample-43.png',
    'assets/sample-44.png',
    'assets/sample-45.png',
    'assets/sample-46.png',
    'assets/sample-47.png',
    'assets/sample-48.png',
    'assets/sample-49.png',
    'assets/sample-50.png',
    'assets/sample-51.png'
];

let currentImageIndex = 0;
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

function openModal(index) {
    currentImageIndex = index;
    modalImage.src = sampleImages[index];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + sampleImages.length) % sampleImages.length;
    modalImage.src = sampleImages[currentImageIndex];
}

// Event listeners
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'Escape') closeModal();
    }
});
