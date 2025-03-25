document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skill img"); // Ambil semua gambar dalam section skills
  let index = 0;

  function showNextImage() {
    if (index === 0) {
      // Jika memulai ulang, sembunyikan semua gambar
      skills.forEach((img) => (img.style.opacity = 0));
    }

    // Munculkan gambar satu per satu
    skills[index].style.opacity = 1;
    index++;

    // Jika semua gambar sudah muncul, reset index setelah delay
    if (index === skills.length) {
      setTimeout(() => {
        index = 0;
        showNextImage(); // Mulai ulang animasi
      }, 1500);
    } else {
      setTimeout(showNextImage, 1000); // Tampilkan gambar berikutnya setelah 1 detik
    }
  }

  // Mulai animasi setelah halaman dimuat
  showNextImage();
});

document.addEventListener("DOMContentLoaded", function () {
  const profileImage = document.querySelector(".hero-image img");
  let position = 0;
  let direction = 1; // 1 = naik, -1 = turun

  function animateProfile() {
    position += direction * 0.1; // Sesuaikan kecepatan gerakan
    profileImage.style.transform = `translateY(${position}px)`;

    // Ubah arah gerakan jika mencapai batas atas/bawah
    if (position >= 10 || position <= -10) {
      direction *= -1;
    }

    requestAnimationFrame(animateProfile);
  }

  animateProfile();
});

document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector(".hero-content h1 span");
  const fullText = "MUHAMMAD IVAN MAKHRIZAL";
  let index = 0;

  function typeEffect() {
    if (index < fullText.length) {
      nameElement.textContent += fullText[index];
      index++;
      setTimeout(typeEffect, 150); // Kecepatan mengetik
    } else {
      setTimeout(eraseEffect, 1000); // Tunggu sebelum menghapus teks
    }
  }

  function eraseEffect() {
    if (index > 0) {
      nameElement.textContent = fullText.substring(0, index - 1);
      index--;
      setTimeout(eraseEffect, 100); // Kecepatan menghapus
    } else {
      setTimeout(typeEffect, 500); // Tunggu sebelum mengetik ulang
    }
  }

  typeEffect(); // Jalankan animasi mengetik
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah default action link

      const targetId = this.getAttribute("href").substring(1); // Mengambil id dari href
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Mengurangi 80px agar tidak tertutup navbar
          left: 0,
          behavior: "smooth",
        });
      }
    });
  });
});
