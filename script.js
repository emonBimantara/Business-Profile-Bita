document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
});

function sendToWhatsApp() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        const text = `
Halo Bita Course!

Saya tertarik untuk mengikuti les Bahasa Inggris di Bita Course. Saya ingin mengetahui informasi lebih lanjut mengenai:
- Jadwal kelas
- Biaya
- Cara pendaftaran

Berikut data saya:
Nama: ${name}
Email: ${email}
No HP: ${phone}

Terima kasih!`;

        const encodedText = encodeURIComponent(text);
        const nomorWA = "628893530565";
        const waURL = `https://wa.me/${nomorWA}?text=${encodedText}`;

        window.open(waURL, "_blank");
    }