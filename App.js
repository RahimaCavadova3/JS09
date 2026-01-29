let container = document.getElementById('container');

const ad = ["Səfillər", "1984", "Cinayət və Cəza", "Kiçik Prins", "Simyagər", "Dorian Qreyin Portreti", "Heyvanıstan", "Da Vinci Şifrəsi", "Böyük Qetsbi", "Alchemist", "Uğultulu Təpələr", "Kürk Mantolu Madonna", "Anna Karenina", "Hərb və Sülh", "Faust", "Martin İden", "Don Kixot", "Gülün Adı", "Yüz İllik Tənhalıq", "Səfiller II", "Karamazov Qardaşları", "Yad", "Şahmat", "Gənc Verterin İztirabları", "Bülbülü Öldürmək", "İlahi Komediya", "Hekayəti-Xırs Quldurbasan", "Xosrov və Şirin", "Leyli və Məcnun", "Qürur və Qərəz", "Səfillər III", "Frankenstein", "Drakula", "Kiçik Qadınlar", "Gecə Yarısı Kitabxanası", "Odlar Yurdu", "Dəli Kür", "Xəmsə", "Babək", "Qanun Namınə"];

const muellif = ["Viktor Hüqo", "Corc Oruell", "Fyodor Dostoyevski", "Antuan de Sent-Ekzüperi", "Paulo Koelyo", "Oskar Uayld", "Corc Oruell", "Den Braun", "F. Scott Fitzgerald", "Paulo Koelyo", "Emily Bronte", "Sabahattin Ali", "Lev Tolstoy", "Lev Tolstoy", "Goethe", "Cek London", "Servantes", "Umberto Eko", "Gabriel Garcia Marquez", "Viktor Hüqo", "Fyodor Dostoyevski", "Albert Kamyu", "Stefan Sveyq", "Goethe", "Harper Lee", "Dante Aligyeri", "M.F.Axundzadə", "Nizami Gəncəvi", "Məhəmməd Füzuli", "Jane Austen", "Viktor Hüqo", "Mary Shelley", "Bram Stoker", "Louisa May Alcott", "Matt Haig", "M.S.Ordubadi", "İsmayıl Şıxlı", "Nizami Gəncəvi", "Enver Məmmədxanlı", "Süleyman Rəhimov"];

const janr = ["Klassik", "Distopiya", "Dram", "Uşaq", "Fəlsəfə", "Klassik", "Satira", "Detektiv", "Modern", "Fəlsəfə", "Romantika", "Dram", "Dram", "Epik", "Faciə", "Avtobiografiya", "Macəra", "Tarixi-Detektiv", "Realizm", "Klassik", "Dram", "Fəlsəfə", "Psixoloji", "Romantika", "Dram", "Epik", "Komediya", "Poema", "Poema", "Romantika", "Klassik", "Qorxu", "Qorxu", "Dram", "Fantastika", "Tarixi", "Tarixi", "Poema", "Tarixi", "Dram"];

const qiymet = ["18 AZN", "12 AZN", "15 AZN", "7 AZN", "10 AZN", "11 AZN", "8 AZN", "14 AZN", "13 AZN", "10 AZN", "12 AZN", "9 AZN", "22 AZN", "35 AZN", "20 AZN", "14 AZN", "16 AZN", "19 AZN", "17 AZN", "18 AZN", "25 AZN", "10 AZN", "6 AZN", "8 AZN", "14 AZN", "30 AZN", "9 AZN", "15 AZN", "12 AZN", "13 AZN", "18 AZN", "14 AZN", "16 AZN", "11 AZN", "14 AZN", "12 AZN", "15 AZN", "50 AZN", "14 AZN", "13 AZN"];

const img = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400", "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400", "https://images.unsplash.com/photo-1543005127-d1624f3373fa?w=400", "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=400", "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400", "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400", "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=400", "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400", "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400", "https://images.unsplash.com/photo-1491845274214-c417140f72d1?w=400", "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400", "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400", "https://images.unsplash.com/photo-1511108690759-009324a90311?w=400", "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400", "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400", "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400", "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400", "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400", "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400",
    "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=400", "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400", "https://images.unsplash.com/photo-1543005127-d1624f3373fa?w=400", "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=400", "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400", "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400", "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=400", "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400", "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400", "https://images.unsplash.com/photo-1491845274214-c417140f72d1?w=400", "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400", "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400", "https://images.unsplash.com/photo-1511108690759-009324a90311?w=400", "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400", "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400", "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400", "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400", "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400", "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400"
];

for (let i = 0; i < ad.length; i++) {
    container.innerHTML += `
    <div
            class="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
            <div class="aspect-[3/2]">
                <img src="${img[i]}" class="w-full h-full object-cover" alt="Card image" />
            </div>

            <div class="p-6">
                <h3 class="text-slate-900 text-xl font-semibold">${muellif[i]}</h3>
                <p class="mt-3 text-sm text-slate-500 leading-relaxed">${janr[i]}</p>
                <p class="mt-3 text-sm text-red-400 leading-relaxed">${qiymet[i]}</p>
                <button type="button"
                    class="mt-6 px-6 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-[#ec111d] cursor-pointer">Səbətə at</button>
            </div>
        </div>
    
    
    `

}