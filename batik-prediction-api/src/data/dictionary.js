// Mapping dari class label ke key
const classLabels = [
  'aceh_pintu_aceh',
  'bali_barong',
  'bali_merak',
  'dki_jakarta_ondel_ondel',
  'jawa_barat_megamendung',
  'jawa_timur_pring',
  'kalimantan_barat_insang',
  'kalimantan_dayak',
  'lampung_gajah',
  'maluku_pala',
  'ntb_lumbung',
  'papua_asmat',
  'papua_cendrawasih',
  'papua_tifa',
  'solo_parang',
  'solo_sidoluhur',
  'solo_truntum',
  'sulawesi_selatan_lontara',
  'sumatera_barat_rumah_minang',
  'sumatera_utara_boraspati',
  'yogyakarta_kawung',
];

// PERBAIKAN: Mapping yang konsisten dengan classLabels array
const classToKey = {
  0: 'aceh_pintu_aceh',
  1: 'bali_barong',
  2: 'bali_merak',
  3: 'dki_jakarta_ondel_ondel',  
  4: 'jawa_barat_megamendung',
  5: 'jawa_timur_pring',
  6: 'kalimantan_barat_insang',
  7: 'kalimantan_dayak',
  8: 'lampung_gajah',
  9: 'maluku_pala',
  10: 'ntb_lumbung',
  11: 'papua_asmat',
  12: 'papua_cendrawasih',
  13: 'papua_tifa',
  14: 'solo_parang',
  15: 'solo_sidoluhur',
  16: 'solo_truntum',
  17: 'sulawesi_selatan_lontara',
  18: 'sumatera_barat_rumah_minang',
  19: 'sumatera_utara_boraspati',
  20: 'yogyakarta_kawung',
};

// Data motif batik lengkap
const data = {
  aceh_pintu_aceh: {
    name: "Batik Pintu Aceh",
    provinsi: "Aceh",
    description:
      "Batik Aceh dengan motif 'Pintu Aceh' terinspirasi dari desain pintu rumah tradisional Aceh yang sangat khas, yang memiliki filosofi mendalam mengenai kehangatan dan perlindungan. Motif ini dipadukan dengan elemen geometris yang elegan, mencerminkan perpaduan antara tradisi dan modernitas.",
    occasion:
      "Batik ini sangat cocok dikenakan dalam acara formal seperti pernikahan tradisional Aceh, upacara adat, atau acara resmi yang mengusung tema budaya Aceh.",
    history:
      "Sejarah batik Aceh tidak lepas dari kedatangan pedagang dari pulau Jawa ke Aceh. Tidak diketahui pasti kapan pertama kali mereka datang ke Aceh dan seberapa sering mereka ke sana. Yang jelas, kehadiran mereka punya pengaruh besar terhadap terciptanya batik Aceh. Sebagian pedagang Jawa yang datang ke Aceh membawa kain batik yang dibeli masyarakat Aceh. Kain tersebut lalu dimodifikasi oleh masyarakat Aceh sehingga terciptalah batik khas Aceh yang kita kenal sekarang.",
    link_shop:
      "https://www.tokopedia.com/search?st=&q=batik%20aceh%20pintu%20aceh",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2019/08/10.png",
  },
  bali_barong: {
    name: "Batik Barong Bali",
    provinsi: "Bali",
    description:
      "Batik Bali dengan motif Barong menggambarkan sosok makhluk mitologi yang melambangkan kemenangan kebaikan atas kejahatan. Barong dikenal sebagai penjaga dan pelindung, dan sering kali terlihat dalam berbagai upacara adat Bali. Batik ini dihiasi dengan detail yang kaya dan warna-warna cerah yang merepresentasikan semangat kehidupan Bali.",
    occasion:
      "Motif Barong cocok digunakan dalam acara-acara budaya Bali seperti upacara keagamaan, pesta budaya, atau acara hiburan tradisional Bali.",
    history:
      "Sejarah Batik Singa Barong bermula dari asal-usulnya yang berasal dari daerah Bali, Indonesia. Motif batik Singa Barong pertama kali dikenal pada abad ke-20, saat batik mulai digunakan dalam busana sehari-hari di Bali. Motif Singa Barong yang digambarkan dengan cara yang unik dan khas, dikenal sebagai simbol perlindungan dari kejahatan dan kemungkinan buruk.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20barong%20bali",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2019/08/2.png",
  },
  bali_merak: {
    name: "Batik Merak Bali",
    provinsi: "Bali",
    description:
      "Batik Bali dengan motif Merak menggambarkan keindahan dan kemewahan. Burung merak yang terkenal dengan bulu ekornya yang mempesona sering kali menjadi simbol keanggunan dan kebesaran. Motif ini sangat indah dan penuh warna, mencerminkan kekayaan seni Bali.",
    occasion:
      "Batik ini sangat cocok untuk dikenakan di acara pernikahan atau pesta besar, terutama yang mengangkat tema keindahan alam dan kebudayaan Bali.",
    history:
      "Industri batik bali di Pulau Dewata dimulai sekitar tahun 1970an. Pelopornya antara lain ialah Pande Ketut Krisna dari Banjar Tegeha, Desa Batubulan, Sukawati Gianyar, Bali. Motif Batik Bali Merak Abyorhokokai menggambarkan keindahan burung Merak sebagai poros corak utama pada kain dan disertai kelopak menyerupai bunga sakura. Merak Abyorhokokai dipengaruhi oleh kebudayaan Jepang. Merak Abyorhokokai juga mampu menginterpretasikan bagaimana keindahan Pulau Dewata dengan merak sebagai simbol utama.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20merak%20bali",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2019/08/4-1.png",
  },
  dki_jakarta_ondel_ondel: {
    name: "Batik Ondel Ondel DKI",
    provinsi: "DKI Jakarta",
    description:
      "Batik dengan motif Ondel-Ondel ini terinspirasi oleh patung tradisional Betawi yang digunakan dalam berbagai perayaan dan upacara adat. Ondel-ondel adalah simbol pelindung yang dipercaya membawa keberuntungan dan mengusir roh jahat. Batik ini memiliki desain yang ceria dengan warna-warna cerah dan garis-garis tegas yang menggambarkan semangat masyarakat Betawi.",
    occasion:
      "Batik ini cocok dipakai di acara perayaan tradisional Betawi, seperti pernikahan adat Betawi, festival budaya, atau acara yang mengangkat kekayaan budaya Jakarta.",
    history:
      "Batik Betawi / Ondel-Ondel mulai dikerjakan di abad ke-19 di Batavia. Rumah mode Met Zellar dan Van Zuylen yang menjadi salah satu penghasil batik popular di kalangan masyarakat kelas atas dahulu, lalu mulai masuk ke perkampungan, hingga sampai ke Kampung Batik Betawi Terogong. Sebanyak 40 corak sudah diciptakan masyarakat Terogong dan tergolong unik dan nyentrik karena menggunakan motif benda yang langka untuk ditemukan di kegiatan seharai-hari.",
    link_shop:
      "https://www.tokopedia.com/search?st=&q=batik%20dki%20ondel-ondel",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2019/09/1-6.png",
  },
  jawa_barat_megamendung: {
    name: "Batik Mega Mendung Jawa Barat",
    provinsi: "Jawa Barat",
    description:
      "Batik Mega Mendung berasal dari Jawa Barat dan terinspirasi oleh awan yang menggulung di langit, yang melambangkan harapan dan doa yang tinggi. Motif ini menampilkan perpaduan warna biru dan merah yang mencolok, menggambarkan kedamaian dan kekuatan alam.",
    occasion:
      "Batik Megamendung cocok untuk dikenakan dalam acara pernikahan, pesta kebudayaan, atau acara formal lainnya yang menonjolkan kebudayaan Jawa Barat.",
    history:
      "Berawal dari kedatangan bangsa Cina ke Cirebon. Diceritakan, Sunan Gunung Jati juga menikahi seorang putri dari Tiongkok bernama Putri Ong Tien. Kedatangan Cina turut menambah wawasan masyarakat pribumi, serta menularkan berbagai kesenian dari negeri Tiongkok tersebut. Mulai dari pembuatan piring, porselen, keramik, hingga pembuatan motif kain sutra dari zaman Dinasti Ming dan Ching.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20megamendung",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2019/09/2-9.png",
  },
  jawa_timur_pring: {
    name: "Batik Pring Jawa Timur",
    provinsi: "Jawa Timur",
    description:
      "Batik Pring adalah batik dari Jawa Timur yang menampilkan motif bambu (pring). Bambu sering kali melambangkan ketahanan, kedamaian, dan keteguhan dalam menghadapi tantangan. Motif ini mengandung makna filosofis yang mendalam, dan sangat dihargai dalam budaya Jawa Timur.",
    occasion:
      "Batik ini cocok dikenakan dalam acara resmi atau upacara adat yang mengusung tema kedamaian dan keteguhan.",
    history:
      "Batik Pring Sedapur sudah ada sejak awal masa perkembangan agaa Islam di Indonesia, banyak prakurit Mataram yang kalah di peperangan sehingga mencari tempat yang aman. Mereka pun akhirnya lari ke daerah timur Gunung Lawu di Sidomukti. Di daerah tersebut para prajurit Mataram yang mencari suaka turut mengenalkan budaya batik dan keahlian pada penduduk asli Dusun Papringan. Motif batik Pring terinspirasi dari lingkungan sekitar yang dipenuhi oleh pohon bambu, dimana Pring Sedapur artinya adalah serumpun pohon bambu.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20pring%20sedapur",
    link_image:
      "https://ragam-assets.s3.ap-southeast-2.amazonaws.com/motif-batik/Batik+Pring.jpg",
  },
  kalimantan_barat_insang: {
    name: "Batik Insang Kalimantan Barat",
    provinsi: "Kalimantan Barat",
    description:
      "Batik Insang berasal dari Kalimantan Barat dan menggambarkan keindahan alam Kalimantan, khususnya motif dari hutan tropis dan flora fauna yang ada di daerah tersebut. Motif ini memperlihatkan keragaman hayati yang luar biasa dan kekuatan alam yang mengalir melalui setiap pola batik.",
    occasion:
      "Batik Insang sangat cocok untuk dikenakan di acara kebudayaan Kalimantan, seperti festival budaya, atau acara resmi yang mengangkat tema keberagaman alam dan budaya.",
    history:
      "Kain Tenun Corak Insang, yang khas dari Pontianak, telah menjadi bagian penting dari sejarah Kesultanan Kadriyah sejak abad ke-18. Meskipun motifnya sudah ada sejak masa pemerintahan sultan pertama, kain tenun ini baru mendapatkan pengakuan internasional pada tahun 1930-an ketika permaisuri Sultan Pontianak mengenakannya dalam acara kerajaan di Belanda. Kehadiran kain tenun ini di acara bergengsi tersebut meningkatkan prestise dan popularitasnya, baik di dalam maupun luar negeri. Penggunaan kain tenun ini oleh sultan-sultan Pontianak dalam berbagai acara penting semakin mengukuhkan statusnya sebagai simbol kebanggaan dan identitas masyarakat Melayu Pontianak.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20insang",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2019/10/4-1.png",
  },
  kalimantan_dayak: {
    name: "Batik Dayak Kalimantan Barat",
    provinsi: "Kalimantan Barat",
    description:
      "Batik Dayak adalah batik khas suku Dayak di Kalimantan yang mencerminkan budaya dan kehidupan masyarakat Dayak yang sangat kaya. Motifnya sering kali berupa bentuk geometris dan simbolisme kehidupan yang terkait erat dengan alam dan mitologi suku Dayak.",
    occasion:
      "Batik Dayak cocok untuk dikenakan di acara budaya dan perayaan tradisional Dayak, seperti upacara adat dan festival budaya.",
    history:
      "Kisah batik Kalimantan Timur, khususnya batik sasirangan, berawal dari sebuah tantangan pernikahan. Putri Junjung Buih memberikan syarat kepada Raja Patih Lambung Mangkurat untuk membuat kain tenun dalam waktu sehari. Dengan bantuan para putrinya, sang raja berhasil menciptakan batik dengan motif Wadi dan Padi Waringin yang kemudian dikenal sebagai batik sasirangan.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20dayak",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2019/10/1-3.png",
  },
  lampung_gajah: {
    name: "Batik Gajah Lampung",
    provinsi: "Lampung",
    description:
      "Batik Lampung dengan motif Gajah menggambarkan kebesaran dan kekuatan gajah, yang merupakan simbol penting dalam budaya Lampung. Motif ini penuh dengan detil yang rumit dan sangat mewakili semangat kekuatan dan perlindungan.",
    occasion:
      "Batik ini cocok dikenakan di acara-acara yang mengusung tema kekuatan, seperti acara resmi atau pertemuan adat yang penting.",
    history:
      "Batik Lampung sebenarnya merupakan hasil inovasi seorang penduduk Jawa yang tinggal di Lampung bernama Gatot Kartiko. Beliau mengambil inspirasi dari kain tenun tradisional Lampung seperti tapis dan siger untuk menciptakan motif batik yang khas. Tujuan utama dari pengembangan batik Lampung ini adalah untuk mengangkat ciri khas daerah Lampung dan juga sebagai peluang bisnis, mirip dengan apa yang telah dilakukan oleh batik Jember. Popularitas batik Lampung semakin meningkat ketika digunakan oleh tokoh-tokoh penting seperti mantan Gubernur Lampung, Sjachroedin Z.P., dan mantan Presiden Indonesia, Susilo Bambang Yudhoyono. Penggunaan batik Lampung oleh tokoh-tokoh tersebut semakin memperkuat posisi batik Lampung sebagai salah satu warisan budaya Indonesia yang bernilai tinggi.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20gajah",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2019/09/4-4.png",
  },
  maluku_pala: {
    name: "Batik Pala Maluku",
    provinsi: "Maluku",
    description:
      "Batik Pala khas Maluku terinspirasi dari rempah-rempah yang terkenal di daerah ini, khususnya pala yang memiliki nilai sejarah dan ekonomis tinggi. Motif batik ini menggambarkan tanaman pala yang indah dengan warna-warna cerah yang memancarkan energi dan kehangatan.",
    occasion:
      "Batik ini cocok digunakan di acara kebudayaan Maluku, seperti festival rempah-rempah atau acara budaya yang mengangkat kekayaan alam Maluku.",
    history:
      "Berawal dari abad ke-16, dimana pecahnya peperangan di area Pamekasan antara Raden Azhar dan Ke'Lesap. Raden Azhar menggunakan pakaian berupa kain batik motif parang atau leres, dan terlihat gagah dalam memakainya. Hal ini menjadi perbincangan erat oleh masyarakat yang melihatnya berperang sembari mengenakan pakaian tersebut dan akhirnya melahirkan beragam motif batik, salah satunya adalah Mataketeran.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20pala",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2020/01/1-3.png",
  },
  ntb_lumbung: {
    name: "Batik Lumbung NTB",
    provinsi: "Nusa Tenggara Barat",
    description:
      "Batik Lumbung berasal dari Nusa Tenggara Barat, dengan motif yang terinspirasi dari lumbung padi tradisional. Lumbung melambangkan keberhasilan dan kelimpahan hasil bumi serta simbol keberlanjutan dalam kehidupan petani. Motif batik ini menggambarkan bentuk lumbung dengan pola yang geometris dan warna alami yang menenangkan.",
    occasion:
      "Batik ini cocok digunakan dalam acara-acara kebudayaan Nusa Tenggara Barat, seperti upacara adat, festival pertanian, atau acara budaya yang merayakan kearifan lokal.",
    history:
      "Batik Lumbung NTB terinspirasi oleh tradisi pertanian yang sudah ada sejak zaman nenek moyang di daerah NTB. Lumbung padi, yang berfungsi sebagai simbol keberhasilan dan ketahanan pangan, menjadi motif utama dalam batik ini, menggambarkan ketahanan dan kelimpahan hasil bumi yang menjadi tulang punggung kehidupan masyarakat setempat.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20lumbung%20ntb",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2020/01/1-7.png",
  },
  papua_asmat: {
    name: "Batik Papua Asmat",
    provinsi: "Papua",
    description:
      "Batik Papua Asmat terinspirasi oleh budaya suku Asmat yang dikenal dengan ukiran dan seni tubuh mereka. Motif batik ini menggambarkan alam Papua yang kaya, seperti pohon-pohon, hewan, dan simbol-simbol suku Asmat yang memiliki nilai spiritual tinggi.",
    occasion:
      "Batik ini cocok digunakan dalam acara kebudayaan Papua atau festival seni tradisional, serta acara yang mengangkat budaya asli Papua.",
    history:
      "Batik Asmat terinspirasi dari kehidupan sehari-hari suku Asmat yang hidup di daerah pesisir Papua. Motif batik ini menggambarkan kehidupan alam dan spiritualitas yang kuat, serta pengaruh ukiran-ukiran tradisional yang sangat khas dari suku Asmat.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20asmat%20papua",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2020/01/3-5.png",
  },
  papua_cendrawasih: {
    name: "Batik Papua Cendrawasih",
    provinsi: "Papua Barat",
    description:
      "Batik ini terinspirasi oleh burung Cendrawasih yang menjadi simbol keindahan dan keanekaragaman hayati Papua. Motifnya menonjolkan keindahan bulu burung Cendrawasih yang berwarna cerah dan mempesona.",
    occasion:
      "Batik Cendrawasih cocok dikenakan dalam acara kebudayaan Papua atau festival lingkungan yang merayakan keanekaragaman hayati.",
    history:
      "Batik Cendrawasih mencerminkan penghargaan terhadap burung Cendrawasih yang telah menjadi simbol kebanggaan Papua sejak zaman dahulu. Motif ini menggambarkan keindahan alam Papua yang tak ternilai.",
    link_shop:
      "https://www.tokopedia.com/search?st=&q=batik%20cendrawasih%20papua",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2020/01/2-6.png",
  },
  papua_tifa: {
    name: "Batik Tifa",
    provinsi: "Papua",
    description:
      "Batik Tifa berasal dari Papua dan terinspirasi oleh alat musik tradisional Tifa, yang biasa digunakan dalam upacara adat. Motif batik ini menggambarkan irama dan pola-pola yang menyerupai suara dari Tifa.",
    occasion:
      "Batik Tifa cocok digunakan dalam acara kebudayaan Papua atau festival seni musik tradisional.",
    history:
      "Batik Tifa merayakan warisan budaya Papua yang kaya, di mana alat musik Tifa menjadi simbol persatuan dan kekuatan dalam masyarakat. Motifnya sering kali melambangkan irama kehidupan dan semangat komunitas.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20tifa%20papua",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2020/01/2-5.png",
  },
  solo_parang: {
    name: "Batik Solo Parang",
    provinsi: "Jawa Tengah",
    description:
      "Batik Solo Parang adalah salah satu motif batik yang sangat terkenal dan berasal dari Solo. Motif parang melambangkan kekuatan dan keberanian dengan pola-pola yang menyerupai garis-garis panjang yang saling berkelok.",
    occasion:
      "Batik Solo Parang cocok dikenakan dalam acara resmi atau kebudayaan Jawa, seperti pernikahan atau upacara adat.",
    history:
      "Batik Solo Parang memiliki sejarah panjang yang terkait dengan tradisi keraton Solo. Motif ini melambangkan kekuatan dan semangat juang, yang sering dikenakan oleh raja dan bangsawan Solo sebagai simbol kemegahan.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20solo%20parang",
    link_image:
      "https://ragam-assets.s3.ap-southeast-2.amazonaws.com/motif-batik/Batik+Parang.jpg",
  },
  solo_sidoluhur: {
    name: "Batik Solo Sidoluhur",
    provinsi: "Jawa Tengah",
    description:
      "Batik Sidoluhur adalah motif batik khas Solo yang menggambarkan harapan dan doa bagi kehidupan yang lebih baik. Pola ini mengandung simbol-simbol positif yang sering digunakan dalam acara adat dan upacara penting.",
    occasion:
      "Batik Solo Sidoluhur cocok dikenakan dalam acara perayaan atau acara penting yang berkaitan dengan upacara adat atau kebudayaan Jawa.",
    history:
      "Sidoluhur berasal dari kata 'Sido' yang berarti 'menjadi' dan 'Luhur' yang berarti 'mulia'. Motif ini bermakna sebagai doa agar seseorang dapat hidup mulia dan mencapai derajat tinggi dalam kehidupan.",
    link_shop:
      "https://www.tokopedia.com/search?st=&q=batik%20solo%20sidoluhur",
    link_image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggLNl62e3BAVozNmAn2nyHq3lsaES2KbGBPNszkfDS3YWiJoB4He2Gey5csn_3-2vdPHPmRRQyaKeap4WFmTeblK-Cekq0iba-znfJo59vvCSvcrvPGAeXci1NVEWlrf-he1CQ1UGfRws/s1600/batik+motif+sido+luhur+4.jpg",
  },
  solo_truntum: {
    name: "Batik Solo Truntum",
    provinsi: "Jawa Tengah",
    description:
      "Batik Solo Truntum adalah motif batik dengan pola bunga yang halus dan elegan. Motif ini sering digunakan dalam acara pernikahan adat Solo dan simbol keberuntungan.",
    occasion:
      "Batik Truntum paling sering digunakan dalam acara pernikahan adat atau acara-acara yang membutuhkan nuansa sakral dan penuh makna.",
    history:
      "Truntum berarti 'bersemi' atau 'terbit' dalam bahasa Jawa, dan motif ini dipercaya membawa berkah dan keberuntungan bagi pasangan yang menikah.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20solo%20truntum",
    link_image:
      "https://upload.wikimedia.org/wikipedia/id/e/ee/BatikTruntum.JPG",
  },
  sulawesi_selatan_lontara: {
    name: "Batik Sulawesi Selatan Lontara",
    provinsi: "Sulawesi Selatan",
    description:
      "Batik Sulawesi Selatan Lontara terinspirasi dari sistem tulisan Lontara yang digunakan oleh suku Bugis dan Makassar. Motifnya sering kali mengandung simbol-simbol tradisional yang berkaitan dengan kehidupan sosial dan budaya.",
    occasion:
      "Batik ini cocok dikenakan dalam acara adat Bugis atau Makassar, serta perayaan kebudayaan Sulawesi Selatan.",
    history:
      "Batik Lontara menggambarkan keindahan sistem tulisan kuno yang digunakan untuk menuliskan sejarah dan hikayat, serta berfungsi sebagai media komunikasi antara generasi.",
    link_shop:
      "https://www.tokopedia.com/search?st=&q=batik%20lontara%20sulawesi%20selatan",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2020/01/2-1.png",
  },
  sumatera_barat_rumah_minang: {
    name: "Batik Sumatera Barat Rumah Minang",
    provinsi: "Sumatera Barat",
    description:
      "Batik Rumah Minang terinspirasi oleh arsitektur tradisional Minangkabau yang memiliki atap rumah yang unik dan khas. Motif batik ini menggambarkan keindahan desain rumah adat serta simbol-simbol budaya Minangkabau.",
    occasion:
      "Batik ini cocok digunakan dalam acara pernikahan adat Minangkabau atau upacara budaya Sumatera Barat.",
    history:
      "Batik Rumah Minang mengangkat tema arsitektur rumah adat Minangkabau, yang melambangkan kekuatan dan kebersamaan dalam keluarga dan masyarakat.",
    link_shop: "https://www.tokopedia.com/search?st=&q=batik%20rumah%20minang",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2019/08/3-4.png",
  },
  sumatera_utara_boraspati: {
    name: "Batik Batak Gorga Boraspati",
    provinsi: "Sumatera Utara",
    description:
      "Batik Boraspati terinspirasi dari budaya adat Batak di Sumatera Utara. Motif batik ini menggambarkan simbol-simbol kebudayaan Batak, termasuk pola-pola geometris yang sering ditemukan dalam ukiran dan seni tekstil mereka.",
    occasion:
      "Batik Boraspati cocok dikenakan pada acara adat Batak, seperti pernikahan atau upacara keagamaan, serta acara budaya yang merayakan kekayaan tradisi Sumatera Utara.",
    history:
      "Batik Boraspati terinspirasi oleh pola dan motif yang telah ada sejak zaman kerajaan Batak, di mana kain tenun tradisional digunakan dalam berbagai ritual dan acara kebudayaan. Motif ini melambangkan ikatan erat antara manusia dan alam semesta.",
    link_shop:
      "https://www.tokopedia.com/search?st=&q=batik%20boraspati%20sumatera%20utara",
    link_image:
      "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2023/02/2214392023-boraspati.jpg",
  },
  yogyakarta_kawung: {
    name: "Batik Kawung Mataram",
    provinsi: "Yogyakarta",
    description:
      "Batik Kawung adalah salah satu motif batik klasik dari Yogyakarta yang terdiri dari pola bulat atau oval yang saling terhubung, menyerupai buah kawung (buah aren). Motif ini melambangkan kesempurnaan, keseimbangan, dan kehidupan yang abadi.",
    occasion:
      "Batik Kawung sangat cocok dikenakan pada acara formal, upacara adat, atau acara kebudayaan yang mengangkat nilai-nilai kesempurnaan dan keharmonisan.",
    history:
      "Batik Kawung sudah ada sejak zaman keraton Yogyakarta, dan dipakai oleh kalangan bangsawan sebagai simbol kesucian, keharmonisan, serta keteraturan dalam kehidupan. Motif ini sangat dihormati di Yogyakarta dan terus dilestarikan hingga saat ini.",
    link_shop:
      "https://www.tokopedia.com/search?st=&q=batik%20kawung%20yogyakarta",
    link_image:
      "https://www.iwarebatik.org/wp-content/uploads/2020/01/8.png",
  },
};

module.exports = {
  data,
  classLabels,
  classToKey
};