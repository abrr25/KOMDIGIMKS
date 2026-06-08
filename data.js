
const DIGIMAP_DATA = {
  floors: [
    { id: 1, name: "Lantai 1", description: "Layanan Publik, Lobi Utama, & Bagian Umum (Kepegawaian, Keuangan, Perencanaan)" },
    { id: 2, name: "Lantai 2", description: "Divisi Pelatihan (Aparatur, Talenta, Keterampilan Dasar), Ruang Rapat Losari, & Media Publikasi" },
    { id: 3, name: "Lantai 3", description: "Infrastruktur TIK, Pusat Data, Manajemen Resiko, & NOC Makassar" }
  ],
  
  rooms: [
    
    {
      id: "l1-lobi",
      floor: 1,
      name: "Lobi Utama & Layanan Publik",
      category: "Layanan",
      division: "Bagian Umum - Humas",
      description: "Pintu masuk utama gedung BBLSDMP Komdigi Makassar, pusat registrasi tamu, buku tamu digital, dan pusat pelayanan informasi terpadu.",
      facilities: ["Wi-Fi Publik", "AC", "Area Tunggu Sofa", "Informasi Layar Sentuh"],
      staf: [
        { name: "Dewi Lestari", role: "Koordinator Layanan Tamu & Informasi" },
        { name: "Rian Hidayat", role: "Staf Layanan Publik" }
      ]
    },
    {
      id: "l1-rapat-toba",
      floor: 1,
      name: "Ruang Rapat Phinisi",
      category: "Rapat",
      division: "Bagian Umum",
      description: "Ruang rapat berkapasitas besar untuk koordinasi internal balai besar, sosialisasi program pelatihan, dan audiensi eksternal.",
      facilities: ["AC", "Proyektor 4K", "Audio Conference System", "Wi-Fi High-Speed", "Kapasitas 30 Orang"],
      staf: []
    },
    {
      id: "l1-kepegawaian",
      floor: 1,
      name: "Bagian Umum & Kepegawaian",
      category: "Kantor",
      division: "Bagian Umum",
      description: "Mengurusi urusan kepegawaian, perencanaan program balai, administrasi keuangan dan aset, perlengkapan, tata usaha, serta penerimaan mahasiswa magang.",
      facilities: ["AC", "Scanner Dokumen", "Printer Laser", "Pantry Staf"],
      staf: [
        { name: "Tasmil", role: "Kepala Bagian Umum" },
        { name: "Aswar Azis", role: "Koordinator Kepegawaian" },
        { name: "Olga Olivia", role: "Koordinator Keuangan dan Aset" },
        { name: "Firdaus Mashyur", role: "Koordinator Perencanaan" },
        { name: "Siti Aisyah, S.Sos.", role: "Staf Administrasi Magang" }
      ]
    },
    {
      id: "l1-mushola",
      floor: 1,
      name: "Mushola Al-Ikhlas",
      category: "Fasilitas",
      division: "Umum",
      description: "Fasilitas ibadah untuk karyawan, mahasiswa magang, dan tamu umum BBLSDMP Makassar.",
      facilities: ["AC", "Tempat Wudhu Bersih", "Sajadah & Mukena", "Sound System Adzan"],
      staf: []
    },
    {
      id: "l1-pantry",
      floor: 1,
      name: "Pantry Lantai 1",
      category: "Fasilitas",
      division: "Umum",
      description: "Dapur bersih untuk kebutuhan minum dan makan siang karyawan Lantai 1.",
      facilities: ["Water Dispenser", "Kulkas", "Microwave", "Kopi & Teh Gratis"],
      staf: []
    },

    {
      id: "l2-humas",
      floor: 2,
      name: "Divisi Pelatihan & Media Publikasi",
      category: "Kantor",
      division: "Kelompok Jabatan Fungsional",
      description: "Divisi yang merancang dan melaksanakan program pelatihan sertifikasi kompetensi digital (Aparatur Digital, Talenta Digital, Keterampilan Digital Dasar) serta publikasi media informasi resmi BBLSDMP Makassar.",
      facilities: ["AC", "Mini Studio Recording", "Kamera DSLR & Mirrorless", "Wi-Fi High-Speed"],
      staf: [
        { name: "Faisal Risani", role: "Koordinator Aparatur Digital" },
        { name: "Herman", role: "Koordinator Talenta Digital" },
        { name: "Tasmil", role: "Koordinator Keterampilan Digital Dasar" },
        { name: "Solehuddin Hasdin", role: "Koordinator Media Publikasi" }
      ]
    },
    {
      id: "l2-aptika",
      floor: 2,
      name: "Tim Penelitian & Visualisasi Data",
      category: "Kantor",
      division: "Kelompok Jabatan Fungsional",
      description: "Melakukan penelitian di bidang komunikasi dan informatika, kajian kebijakan teknologi informasi, serta visualisasi data TIK untuk pengembangan SDM di wilayah Indonesia Timur.",
      facilities: ["AC", "Smartboard", "Koleksi Jurnal & Buku", "Coffee Machine"],
      staf: [
        { name: "Nur Alam", role: "Koordinator Pusdatin TIK Visualisasi Data" },
        { name: "Larasati Putri, M.Sc.", role: "Peneliti Ahli Muda Bidang TIK" }
      ]
    },
    {
      id: "l2-rapat-singkarak",
      floor: 2,
      name: "Ruang Rapat Losari",
      category: "Rapat",
      division: "Umum",
      description: "Ruang rapat berukuran sedang yang digunakan untuk koordinasi teknis tim fungsional pelatihan, evaluasi program kerja bulanan, dan konsultasi magang.",
      facilities: ["AC", "Smart TV 75\"", "Whiteboard Kaca", "Kapasitas 12 Orang", "Wi-Fi Dedicated"],
      staf: []
    },
    {
      id: "l2-pantry",
      floor: 2,
      name: "Pantry Lantai 2",
      category: "Fasilitas",
      division: "Umum",
      description: "Dapur bersih lantai 2 untuk istirahat kopi fungsional dan staf balai.",
      facilities: ["Dispenser", "Kulkas", "Coffee Maker", "Snack Box"],
      staf: []
    },

    {
      id: "l3-siber",
      floor: 3,
      name: "Infrastruktur TIK & Manajemen Resiko",
      category: "Kantor",
      division: "Bagian Umum - IT Support",
      description: "Bertanggung jawab atas pengelolaan infrastruktur TIK, keamanan jaringan internal, audit siber, dukungan teknis komputasi, serta manajemen resiko operasional.",
      facilities: ["AC", "Layar Monitor Jaringan", "Secure Access Door", "Shredder Dokumen"],
      staf: [
        { name: "Rudi Hermayadi", role: "Koordinator Pusdatin TIK Infrastruktur" },
        { name: "Bahrawi, S.Kom., M.T.", role: "Koordinator Manajemen Resiko" },
        { name: "Dinda Kirana", role: "Staf Teknis Jaringan & CSIRT" }
      ]
    },
    {
      id: "l3-pdn",
      floor: 3,
      name: "Pusat Data & Server BBLSDMP",
      category: "Kantor",
      division: "Bagian Umum",
      description: "Ruang server utama BBLSDMP Makassar untuk penyimpanan database internal, infrastruktur komputasi jaringan, dan backup sistem berkala.",
      facilities: ["AC Server Presisi", "Dual UPS System", "Biometric Scanner Entry", "Kamera CCTV 24 Jam"],
      staf: [
        { name: "Rudi Hermayadi", role: "Koordinator Infrastruktur TIK" },
        { name: "Yusuf Ibrahim", role: "System Administrator & Cloud Engineer" }
      ]
    },
    {
      id: "l3-noc",
      floor: 3,
      name: "NOC Center BBLSDMP Makassar",
      category: "Layanan",
      division: "Bagian Umum - TI",
      description: "Ruang pemantauan lalu lintas jaringan lokal BBLSDMP Makassar, manajemen bandwidth untuk pelaksanaan ujian/sertifikasi, dan bantuan Wi-Fi.",
      facilities: ["AC Dingin Ekstra", "Video Wall Multi-Screen", "Giga-Fiber Connection", "Kapasitas 8 Operator"],
      staf: [
        { name: "Nur Alam", role: "Koordinator Visualisasi Data" },
        { name: "Eko Prasetyo", role: "Operator Jaringan & Operator NOC" }
      ]
    },
    {
      id: "l3-pantry",
      floor: 3,
      name: "Pantry & Lounge Lantai 3",
      category: "Fasilitas",
      division: "Umum",
      description: "Tempat istirahat nyaman bagi staf IT Support & Jaringan yang bertugas piket lembur.",
      facilities: ["Dispenser Air Hangat", "Mesin Kopi Kapsul", "Sofa Santai", "Smart TV"],
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
        a: "Anda dapat menemui mentor atau koordinator magang Anda (Ibu Siti Aisyah) di ruang Bagian Umum & Kepegawaian (Lantai 1) setiap hari Jumat sore."
      }
    ],
    
    contacts: [
      { name: "Ibu Siti Aisyah (Bagian Umum)", phone: "0812-3456-7890", role: "Administrasi & Absen Magang" },
      { name: "Bp. Tasmil (Kepala Bagian Umum)", phone: "0857-9876-5432", role: "Koordinator Layanan & Kepegawaian" },
      { name: "NOC Center Makassar (Lantai 3)", phone: "Ekstensi 114 (Telepon Kantor)", role: "Bantuan IT & Jaringan Internal" }
    ]
  }
};
