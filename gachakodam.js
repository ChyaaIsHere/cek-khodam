// data array dari kumpulan khodams 2024-2050 yang gege abies
const khodams = [
    { name: "Macan Pemarah", desc: "Macan Pemarah tuh bawaannya pengen nyerang mulu, tapi gitu-gitu lucu juga. tapi kadang kadang, kiding kiding... au ah" },
    { name: "Buaya Sunda", desc: "Buaya Sunda, matanya bisa bikin kamu ngerasa di bawah tekanan terus. tiati dah, lu tipe orang yang suka sama semua orang... dih jadi ngeri gua" },
    { name: "Beruang Sunda", desc: "Beruang Sunda tuh gede bat, tapi bisa bikin lawan bicara lu meleleh dengan tingkahnya yang kayak...." },
    { name: "Harimau Birahi", desc: "Nah kalo yang ini tuh orangnya gamau diem, terus ngerasa pengen deketin terus, makanya jadi orang jan pikmi napa!" },
    { name: "Tutup Odol", desc: "Khodam ini emang kecil, sian amat. coba lagi gih, kasian gua sama lu kalo gua jelasin khodam ini apaan.. mending cari lagi dah." },
    { name: "Tutup Panci", desc: "Kalo yang ini, ngejelasin kalo lu tuh pipel plesur bat orangnya... suka banget diribetin sama orang yakk..." },
    { name: "Kaleng Kejepit", desc: "Tipe ini bikin kesel. kadang suka ambil kesempatan dalam kesempitan, kadang malah bikin kesempatannya sendiri.. bangke." },
    { name: "Kanebo Kering", desc: "Kanebo Kering ini emang ga keliatan, kayak dia yang tiba tiba ilang eh ternyata udah sama yang lain.. yaelah nt mulu bang" },
    { name: "Gergaji Mesin", desc: "Gergaji Mesin selalu siap ngebantu siapa aja.. sampe lupa kalo lu cuma di jadiin alat sama dia. jiahh.. nt mulu bang hidup lu" },
    { name: "Nyi Blorong", desc: "Nyi Blorong suka dateng tiba-tiba dan kadang bikin baper.. eh gak lama malah ninggalin yang udah dilaluin bareng bareng. jangan dibiasain bang." },
    { name: "Tumis Kangkung", desc: "Tumis Kangkung, sih, terkenal banget enaknya, tumis kangkungnya yg enak.. bukan lu nya.. lu nya mah bikin anak orang kit ati mulu. ancrit." },
    { name: "Jam Dinding Rusak", desc: "Si Jam Dinding ini, waktu terus aja muter, kadang cepat, kadang lama, kadang bikin bingung. lagian dipikirin. siapa suruh coba? emang dia mikirin lu?" },
    { name: "Gunting Tumpul", desc: "Gunting Tumpul suka ngebleng, ngeblengnya kebangetan ebuset. contoh-contoh harddisknya udah penuh ya gni jadinya." },
    { name: "Kasur Empuk", desc: "Lah ini mah hampir 9999999999 juta persen pada suka ini cok.. malah ada kayaknya yg jadiin ini hobi... sapa yak? 😭" },
    { name: "Penjaga Kulkas", desc: "Si Penjaga Kulkas ini selalu siap nemenin dia nyemil ampe tengah malam. padahal lu cuma jadi badutnya doang. yaelah, effort lu sia sia bang.." },
];

        function showNotification(message) { // memunculkan isi notif
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.style.display = 'block';

            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000);
        }

        function startGacha() { // buat mulai gacha
            const nameInput = document.getElementById('name').value.trim();
            if (nameInput === "") { // kondisi kalo misalnya user blm nambahin nama (string)
                showNotification("Woi, tulis dulu nama lu disituu..");
                return;
            }

            document.getElementById('loading').style.display = 'block'; // ngeblock se isi layar
            document.getElementById('overlay').classList.add('active'); // munculin overlaynya

            setTimeout(() => {
                document.getElementById('loading').style.display = 'none'; 
                document.getElementById('overlay').classList.remove('active');
                
                // membuat isi dari khodams diacak secara random
                const randomIndex = Math.floor(Math.random() * khodams.length);
                const selectedKhodam = khodams[randomIndex];

                document.getElementById('popup-result').innerHTML = `${selectedKhodam.name}.<br style="margin: 7px;">${selectedKhodam.desc}`;
                document.getElementById('popup').classList.add('active');
            }, 2000); 
        }

        function resetGacha() { 
            document.body.classList.add('fade-out');
            setTimeout(() => {
                location.reload(); 
            }, 2000); 
        }