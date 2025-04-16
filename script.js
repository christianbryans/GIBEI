// Menambahkan event listener untuk scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar'); // Mendapatkan elemen navbar
    if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        navbar.classList.add('scrolled'); // Menambahkan kelas scrolled
    } else {
        navbar.classList.remove('scrolled'); // Menghapus kelas scrolled
    }
});
