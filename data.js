const DIGIMAP_DATA = {
  floors: [
    { id: 1, name: "Lantai 1", description: "Lobi Utama, Resepsionis, Ruang Laktasi, Co-Working Space, & 3 Ruang Pelatihan (termasuk Difabel)" },
    { id: 2, name: "Lantai 2", description: "Laboratorium Komputer, Ruang Pelatihan, Ruang Sertifikasi, Musholah, Ruang Podcast, Ruang Server, & Area Bermain Anak" },
    { id: 3, name: "Lantai 3", description: "Ruang Kepala Balai, Ruang Rapat Pimpinan, Administrasi Keuangan/BMN, Ruang Kabag Umum/Kepegawaian, Studio Mengajar Online, & Co-Working" },
    { id: 4, name: "Lantai 4", description: "Lapangan Upacara & Olahraga (Rooftop), Ruang Seminar Serbaguna, Ruang Kebugaran (Gym), & Dapur Utama" }
  ],
  
  rooms: [
    // --- LANTAI 1 ---
    {
      id: "l1-pelatihan-1",
      floor: 1,
      name: "Ruang Pelatihan 1",
      category: "Layanan",
      division: "Divisi Pelatihan",
      description: "Ruang kelas pelatihan terstandarisasi untuk program literasi digital dan pengembangan kompetensi TIK dasar.",
      facilities: ["AC", "Proyektor", "Meja & Kursi", "Wi-Fi High-Speed"],
      staf: []
    },
    {
      id: "l1-pelatihan-2",
      floor: 1,
      name: "Ruang Pelatihan 2",
      category: "Layanan",
      division: "Divisi Pelatihan",
      description: "Ruang kelas pelatihan sekunder yang digunakan untuk kegiatan pelatihan sertifikasi TIK tingkat lanjut.",
      facilities: ["AC", "Proyektor", "Meja & Kursi", "Wi-Fi High-Speed"],
      staf: []
    },
    {
      id: "l1-pelatihan-difabel",
      floor: 1,
      name: "Ruang Pelatihan Difabel",
      category: "Layanan",
      division: "Divisi Pelatihan",
      description: "Ruang pelatihan khusus yang didesain ramah disabilitas, lengkap dengan jalur akses kursi roda dan perangkat bantu belajar adaptif.",
      facilities: ["Akses Kursi Roda", "AC", "Screen Reader Support", "Wi-Fi High-Speed"],
      staf: []
    },
    {
      id: "l1-laktasi",
      floor: 1,
      name: "Ruang Laktasi",
      category: "Fasilitas",
      division: "Bagian Umum",
      description: "Ruang menyusui khusus yang tenang, bersih, dan privat bagi pegawai maupun tamu/pengunjung wanita.",
      facilities: ["AC", "Sofa Nyaman", "Kulkas ASI", "Wastafel"],
      staf: []
    },
    {
      id: "l1-resepsionis",
      floor: 1,
      name: "Resepsionis & Pusat Informasi",
      category: "Layanan",
      division: "Bagian Umum",
      description: "Meja pelayanan utama untuk registrasi tamu, pengisian buku tamu digital, dan pusat pelayanan informasi terpadu.",
      facilities: ["Komputer Tamu", "AC", "Informasi Layar Sentuh"],
      staf: [
        { name: "Dewi Lestari", role: "Koordinator Layanan Tamu & Informasi" }
      ]
    },
    {
      id: "l1-coworking",
      floor: 1,
      name: "Co-Working Space Lantai 1",
      category: "Fasilitas",
      division: "Umum",
      description: "Area kerja bersama terbuka yang santai, biasanya digunakan oleh tamu atau peserta magang untuk bekerja berkelompok.",
      facilities: ["Meja Kerja Bersama", "Colokan Listrik", "Wi-Fi High-Speed"],
      staf: []
    },
    {
      id: "l1-toilet-pria",
      floor: 1,
      name: "Toilet Pria Lantai 1",
      category: "Fasilitas",
      division: "Umum",
      description: "Fasilitas toilet umum pria di Lantai 1.",
      facilities: ["Wastafel", "Cermin", "Urinal"],
      staf: []
    },
    {
      id: "l1-toilet-wanita",
      floor: 1,
      name: "Toilet Wanita Lantai 1",
      category: "Fasilitas",
      division: "Umum",
      description: "Fasilitas toilet umum wanita di Lantai 1.",
      facilities: ["Wastafel", "Cermin", "Kloset Bersih"],
      staf: []
    },
    {
      id: "l1-ob",
      floor: 1,
      name: "Ruang Office Boy",
      category: "Fasilitas",
      division: "Umum",
      description: "Ruang istirahat dan pos operasional bagi staf kebersihan (office boy/girl) balai.",
      facilities: ["Meja & Kursi", "Perlengkapan Kebersihan"],
      staf: []
    },

    // --- LANTAI 2 ---
    {
      id: "l2-comp-lab",
      floor: 2,
      name: "Laboratorium Komputer",
      category: "Layanan",
      division: "Divisi Pelatihan",
      description: "Laboratorium praktikum dengan PC spesifikasi tinggi untuk kelas pemrograman, pengeditan multimedia, dan simulasi jaringan.",
      facilities: ["Komputer PC", "AC", "Proyektor", "Wi-Fi High-Speed"],
      staf: []
    },
    {
      id: "l2-pelatihan-1",
      floor: 2,
      name: "Ruang Pelatihan Lantai 2 (1)",
      category: "Layanan",
      division: "Divisi Pelatihan",
      description: "Ruang kelas pelatihan di Lantai 2 untuk program komputasi awan dan keamanan siber.",
      facilities: ["AC", "Smartboard", "Wi-Fi High-Speed"],
      staf: []
    },
    {
      id: "l2-pelatihan-2",
      floor: 2,
      name: "Ruang Pelatihan Lantai 2 (2)",
      category: "Layanan",
      division: "Divisi Pelatihan",
      description: "Ruang kelas pelatihan sekunder di Lantai 2 untuk program visualisasi data.",
      facilities: ["AC", "Smartboard", "Wi-Fi High-Speed"],
      staf: []
    },
    {
      id: "l2-sertifikasi",
      floor: 2,
      name: "Ruang Sertifikasi",
      category: "Layanan",
      division: "Divisi Pelatihan",
      description: "Ruang tertutup khusus ujian sertifikasi resmi untuk menguji kompetensi talenta digital nasional.",
      facilities: ["AC", "PC Ujian khusus", "CCTV Pemantau"],
      staf: []
    },
    {
      id: "l2-musholah",
      floor: 2,
      name: "Musholah Al-Ikhlas",
      category: "Fasilitas",
      division: "Umum",
      description: "Fasilitas ibadah musholah utama gedung balai Lantai 2.",
      facilities: ["AC", "Tempat Wudhu Bersih", "Sajadah & Mukena", "Sound System Adzan"],
      staf: []
    },
    {
      id: "l2-wudhu-pria",
      floor: 2,
      name: "Tempat Wudhu Pria",
      category: "Fasilitas",
      division: "Umum",
      description: "Tempat wudhu khusus pria yang bersih dan teratur.",
      facilities: ["Keran Air Bersih"],
      staf: []
    },
    {
      id: "l2-wudhu-wanita",
      floor: 2,
      name: "Tempat Wudhu Wanita",
      category: "Fasilitas",
      division: "Umum",
      description: "Tempat wudhu khusus wanita yang bersih dan privat.",
      facilities: ["Keran Air Bersih"],
      staf: []
    },
    {
      id: "l2-podcast",
      floor: 2,
      name: "Ruang Podcast & Studio Media",
      category: "Layanan",
      division: "Media Publikasi",
      description: "Studio mini kedap suara dengan perlengkapan rekaman audio-video untuk produksi podcast, siaran pers, dan konten YouTube resmi.",
      facilities: ["Peredam Suara", "Kamera DSLR", "Mixer Audio", "Microphone Podcast"],
      staf: [
        { name: "Solehuddin Hasdin", role: "Koordinator Media Publikasi" }
      ]
    },
    {
      id: "l2-playground",
      floor: 2,
      name: "Tempat Bermain Anak (Kids Zone)",
      category: "Fasilitas",
      division: "Umum - Layanan Publik",
      description: "Fasilitas pojok ramah anak yang disediakan bagi pengunjung yang membawa anak kecil. Menyediakan aneka mainan edukatif dan buku dongeng.",
      facilities: ["Karpet Lembut", "Mainan Edukatif", "Buku Bacaan Anak", "AC", "Sofa Pendamping"],
      staf: []
    },
    {
      id: "l2-toilet-pria",
      floor: 2,
      name: "Toilet Pria Lantai 2",
      category: "Fasilitas",
      division: "Umum",
      description: "Toilet umum pria di Lantai 2.",
      facilities: ["Wastafel", "Cermin", "Urinal"],
      staf: []
    },
    {
      id: "l2-toilet-wanita",
      floor: 2,
      name: "Toilet Wanita Lantai 2",
      category: "Fasilitas",
      division: "Umum",
      description: "Toilet umum wanita di Lantai 2.",
      facilities: ["Wastafel", "Cermin", "Kloset Bersih"],
      staf: []
    },
    {
      id: "l2-server",
      floor: 2,
      name: "Ruang Server & Pusat Data",
      category: "Kantor",
      division: "Bagian Umum - IT Support",
      description: "Pusat penyimpanan server fisik balai besar untuk data siber, koneksi jaringan fiber lokal, dan backup sistem berkala.",
      facilities: ["AC Server Presisi", "UPS System", "Secure Biometric Entry"],
      staf: [
        { name: "Rudi Hermayadi", role: "Koordinator Infrastruktur TIK" },
        { name: "Yusuf Ibrahim", role: "System Administrator & Cloud Engineer" }
      ]
    },

    // --- LANTAI 3 ---
    {
      id: "l3-istirahat",
      floor: 3,
      name: "Ruang Istirahat Staf",
      category: "Fasilitas",
      division: "Umum",
      description: "Ruang istirahat tertutup khusus bagi staf piket atau pejabat internal balai.",
      facilities: ["Kasur Istirahat", "AC", "Toilet Private"],
      staf: []
    },
    {
      id: "l3-toilet-private",
      floor: 3,
      name: "Toilet Private Ruang Istirahat",
      category: "Fasilitas",
      division: "Umum",
      description: "Fasilitas toilet privat di dalam ruang istirahat Lantai 3.",
      facilities: ["Shower Air Hangat", "Kloset"],
      staf: []
    },
    {
      id: "l3-arsip",
      floor: 3,
      name: "Ruang Arsip",
      category: "Fasilitas",
      division: "Bagian Umum",
      description: "Pusat penyimpanan berkas fisik arsip negara, data perencanaan, dokumen kepegawaian, dan aset sejarah balai.",
      facilities: ["Lemari Arsip Besi", "AC", "Peredam Kelembaban"],
      staf: []
    },
    {
      id: "l3-keuangan",
      floor: 3,
      name: "Ruang Keuangan & Perencanaan",
      category: "Kantor",
      division: "Bagian Umum",
      description: "Ruang pengelolaan anggaran keuangan, perencanaan program kerja, dan administrasi umum balai besar.",
      facilities: ["Meja Kerja", "AC", "Printer", "Komputer Keuangan"],
      staf: [
        { name: "Olga Olivia", role: "Koordinator Keuangan dan Aset" },
        { name: "Firdaus Mashyur", role: "Koordinator Perencanaan" }
      ]
    },
    {
      id: "l3-bendahara",
      floor: 3,
      name: "Ruang Bendahara",
      category: "Kantor",
      division: "Bagian Umum",
      description: "Ruang kerja bendahara pengeluaran balai besar untuk pembukuan keuangan internal.",
      facilities: ["AC", "Brankas", "Komputer Bendahara"],
      staf: []
    },
    {
      id: "l3-kabag-umum",
      floor: 3,
      name: "Ruang Kepala Bagian Umum & Kepegawaian",
      category: "Kantor",
      division: "Bagian Umum",
      description: "Pusat administrasi umum, layanan kepegawaian, urusan umum, rumah tangga, dan koordinasi administrasi mahasiswa magang.",
      facilities: ["AC", "Sofa Tamu", "Meja Kerja Kabag", "Wi-Fi High-Speed"],
      staf: [
        { name: "Tasmil", role: "Kepala Bagian Umum" },
        { name: "Aswar Azis", role: "Koordinator Kepegawaian" },
        { name: "Siti Aisyah, S.Sos.", role: "Staf Administrasi Magang" }
      ]
    },
    {
      id: "l3-kepala-balai",
      floor: 3,
      name: "Ruang Kepala Balai Besar",
      category: "Kantor",
      division: "Kepemimpinan",
      description: "Ruang kerja utama Kepala BBLSDMP Komdigi Makassar untuk memimpin kebijakan, koordinasi kerja sama regional, dan kemitraan strategis.",
      facilities: ["AC", "Sofa VIP", "Layar Presentasi", "Meja Rapat Kecil"],
      staf: [
        { name: "Baso Saleh", role: "Kepala BBLSDMP Makassar" }
      ]
    },
    {
      id: "l3-bmn",
      floor: 3,
      name: "Ruang BMN (Barang Milik Negara)",
      category: "Kantor",
      division: "Bagian Umum",
      description: "Ruang tata kelola inventaris, logistik, pengadaan, dan pemeliharaan Barang Milik Negara balai.",
      facilities: ["Komputer Aset", "AC", "Lemari Dokumen"],
      staf: []
    },
    {
      id: "l3-rapat",
      floor: 3,
      name: "Ruang Rapat Pimpinan",
      category: "Rapat",
      division: "Umum",
      description: "Ruang rapat koordinasi terbatas pimpinan, evaluasi program kerja bulanan, dan telekonferensi video tingkat kementerian.",
      facilities: ["AC", "Video Conference System", "Smart TV 85\"", "Kapasitas 16 Orang"],
      staf: []
    },
    {
      id: "l3-coworking",
      floor: 3,
      name: "Co-Working Space Lantai 3",
      category: "Fasilitas",
      division: "Umum",
      description: "Ruang kerja bersama yang tenang dan dinamis bagi staf fungsional umum.",
      facilities: ["Meja Kerja Sekat", "Colokan Listrik", "Wi-Fi Dedicated"],
      staf: [
        { name: "Bahrawi, S.Kom., M.T.", role: "Koordinator Manajemen Resiko" }
      ]
    },
    {
      id: "l3-mengajar-studio",
      floor: 3,
      name: "Ruang Mengajar Online & Studio Mini",
      category: "Layanan",
      division: "Divisi Pelatihan",
      description: "Studio mini khusus instruktur digital untuk proses mengajar pelatihan online jarak jauh dan rekaman konten pembelajaran elektronik (*e-learning*).",
      facilities: ["Greenscreen", "Ringlight & LED", "AC", "Kamera Web HD"],
      staf: [
        { name: "Faisal Risani", role: "Koordinator Aparatur Digital" },
        { name: "Herman", role: "Koordinator Talenta Digital" }
      ]
    },
    {
      id: "l3-toilet-pria",
      floor: 3,
      name: "Toilet Pria Lantai 3",
      category: "Fasilitas",
      division: "Umum",
      description: "Toilet umum pria Lantai 3.",
      facilities: ["Wastafel", "Cermin", "Urinal"],
      staf: []
    },
    {
      id: "l3-toilet-wanita",
      floor: 3,
      name: "Toilet Wanita Lantai 3",
      category: "Fasilitas",
      division: "Umum",
      description: "Toilet umum wanita Lantai 3.",
      facilities: ["Wastafel", "Cermin", "Kloset Bersih"],
      staf: []
    },
    {
      id: "l3-pantry",
      floor: 3,
      name: "Pantry Lantai 3",
      category: "Fasilitas",
      division: "Umum",
      description: "Dapur bersih untuk istirahat teh dan kopi pimpinan serta staf Lantai 3.",
      facilities: ["Coffee Maker", "Dispenser Air Panas", "Kulkas Kecil"],
      staf: []
    },

    // --- LANTAI 4 ---
    {
      id: "l4-lapangan-upacara",
      floor: 4,
      name: "Lapangan Upacara & Olahraga (Rooftop)",
      category: "Fasilitas",
      division: "Umum",
      description: "Lapangan serbaguna terbuka di atap gedung yang digunakan untuk upacara bendera, apel pagi bulanan, senam bersama, serta sarana olahraga bola voli/futsal karyawan.",
      facilities: ["Lapangan Terbuka", "Tiang Bendera", "Garis Batas Olahraga"],
      staf: []
    },
    {
      id: "l4-seminar",
      floor: 4,
      name: "Ruang Seminar Utama",
      category: "Rapat",
      division: "Umum",
      description: "Aula serbaguna berkapasitas besar untuk menyelenggarakan seminar nasional, kuliah umum, pelepasan mahasiswa magang, atau rapat pleno koordinasi regional.",
      facilities: ["Panggung Utama", "AC Standing", "Sound System Besar", "Kapasitas 100 Orang", "Proyektor HD"],
      staf: []
    },
    {
      id: "l4-gym",
      floor: 4,
      name: "Ruang Kebugaran (Gym Room)",
      category: "Fasilitas",
      division: "Umum - Kesehatan",
      description: "Ruang kebugaran jasmani mini khusus untuk pegawai dan mahasiswa magang guna memelihara kesehatan fisik di luar jam operasional kerja.",
      facilities: ["Treadmill", "Sepeda Statis", "Alat Dumbbell", "AC", "Loker Staf"],
      staf: []
    },
    {
      id: "l4-dapur",
      floor: 4,
      name: "Dapur Utama Rooftop",
      category: "Fasilitas",
      division: "Umum",
      description: "Fasilitas dapur utama untuk kebutuhan katering katering rapat, event besar balai, dan konsumsi lapangan.",
      facilities: ["Kompor Gas Dua Tungku", "Kulkas Dua Pintu", "Peralatan Masak Lengkap"],
      staf: []
    },
    {
      id: "l4-toilet-gym",
      floor: 4,
      name: "Toilet & Ruang Ganti Gym",
      category: "Fasilitas",
      division: "Umum",
      description: "Kamar mandi dan bilik ganti pakaian khusus bagi pengguna area kebugaran (Gym) Lantai 4.",
      facilities: ["Shower Air Hangat", "Wastafel", "Cermin", "Ruang Ganti Pakaian"],
      staf: []
    }
  ],

  onboarding: {
    faq: [
      {
        q: "Bagaimana aturan pakaian kerja di BBLSDMP Komdigi Makassar?",
        a: "Senin-Rabu: Pakaian bebas rapi formal (Kemeja berkerah, celana bahan/rok sopan, bersepatu). Kamis: Baju Batik (diutamakan khas daerah Sulawesi Selatan). Jumat: Pakaian kasual sopan (Kemeja/Polo Shirt, celana jeans gelap diperbolehkan, bersepatu)."
      },
      {
        q: "Jam berapa jam masuk dan pulang kerja di kantor Makassar?",
        a: "Jam masuk standar adalah pukul 07.30 WITA dan jam pulang pukul 16.00 WITA. Jam istirahat makan siang adalah pukul 12.00 - 13.00 WITA (khusus Jumat: 11.30 - 13.00 WITA)."
      },
      {
        q: "Di mana lokasi kantin terdekat di kantor Racing Center?",
        a: "Kantin berada di samping area taman belakang gedung utama. Menyediakan berbagai kuliner khas Makassar dengan metode pembayaran tunai maupun non-tunai (QRIS)."
      },
      {
        q: "Bagaimana cara meminta tanda tangan persetujuan logbook magang?",
        a: "Anda dapat menemui mentor atau koordinator magang Anda (Ibu Siti Aisyah) di ruang Bagian Umum & Kepegawaian (Lantai 3, Ruang Kabag Umum) setiap hari Jumat sore."
      }
    ],
    
    contacts: [
      { name: "Ibu Siti Aisyah (Kepegawaian)", phone: "0812-3456-7890", role: "Administrasi & Absen Magang" },
      { name: "Bp. Tasmil (Kepala Bagian Umum)", phone: "0857-9876-5432", role: "Koordinator Layanan & Kepegawaian" },
      { name: "NOC Center Makassar (Lantai 2)", phone: "Ekstensi 114 (Telepon Kantor)", role: "Bantuan IT & Jaringan Internal" }
    ]
  }
};
