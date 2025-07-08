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