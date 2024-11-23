// Partikel Animasi
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    const numberOfParticles = (canvas.width * canvas.height) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size * 2;
        let y = Math.random() * (canvas.height - size * 2) + size * 2;
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = 'rgba(255, 255, 255, 0.8)';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    requestAnimationFrame(animate);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();
animate();

// navv
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Mengatur posisi scroll sedikit lebih rendah agar tidak tertutup navbar
        behavior: 'smooth'
      });
    });
  });
  
// nav

// SweetAlert2 for Download CV
document.getElementById('downloadCV').addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah download langsung
    Swal.fire({
        title: 'Download CV',
        text: 'Apakah Anda ingin mengunduh CV saya?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya, Unduh!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            // Jika user konfirmasi, lanjutkan download
            window.location.href = 'cv/cv.pdf';
        }
    });
});


// Scroll to Top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');

// Menampilkan atau menyembunyikan tombol saat menggulir
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Mengatur fungsi untuk scroll ke atas
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navbar sticky effect
const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Efek untuk tombol download CV
const downloadCvButton = document.querySelector('.download-cv');
downloadCvButton.addEventListener('click', () => {
    // Ganti dengan URL file CV yang sesuai
    window.location.href = 'path/to/your/cv.pdf';
});

// Efek untuk tombol read more di bagian about
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ganti dengan logika yang sesuai untuk membaca lebih lanjut
        alert('Read more about this topic!');
    });
});

// Efek untuk tombol read more di bagian services
const serviceReadMoreButtons = document.querySelectorAll('.service-card .read-more');
serviceReadMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ganti dengan logika yang sesuai untuk membaca lebih lanjut
        alert('Read more about this service!');
    });
});

