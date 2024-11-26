require("dotenv").config();

// !Warning for Sticker Command [.sticker]
global.warningBot = [
  "Kirim text tersebut beserta gambar untuk bahan sticker",
  "Kirim text tersebut beserta Video maksimal 10 detik untuk bahan sticker",
  "Contoh Penggunaan: .searchba Ako",
  "Contoh Penggunaan: .searchgt ailie",
  "Silahkan Masukan Address/IP server Minecraft, Contoh : .mcstatus hypixel.net",
  "Silahkan input query, Contoh: .google Minecraft",
];
// !Warning for search blue archive Command [.searchba & .searchgt]
global.errorApp = [
  "Karakter tak ditemukan, gunakan .bacharlist untuk menemukan char",
  "Karakter tak ditemukan, gunakan .gtcharlist untuk menemukan char",
];

// Bot Name
global.nameBot = "Uruha - Bot";

// Error Get Data From API
global.dataGetFail = [
  "Terjadi error saat mengambil suatu data dari API",
  "Data error saat akan di input, kemungkinan server down",
];

// Api Env
global.cuacaApi = `${process.env.API_KEY}`;
global.chatgpt = `${process.env.API_KEY2}`;

// Vcard
global.vcard =
  "BEGIN:VCARD\n" +
  "VERSION:3.0\n" +
  "FN:Naitzz Bot\n" +
  "ORG:Natzz;\n" +
  "TEL;type=CELL;type=VOICE;waid=089667440607:+62 896 6744 0607\n" +
  "END:VCARD";

// Image Bot
global.image = [
  "./message/assets/uruhabot.jpeg",
  "./message/assets/Blue Archive _ Title Logo.jpeg",
  "./message/assets/credit.png",
];

global.mainten = "Maaf, bot ini sedang di perbaiki";
global.fiturOff = "Fitur Sedang Dimatikan";

// Owner Number
global.ownNum = "6289667440607";
global.ownName = "Naitzz - Dev";

// Limit User
global.limit = 70;

// Not Found
global.notfound =
  "Command tidak di kenali, silahkan chat owner atau lihat di menu (.menu)";

// Group Warning
global.gcWarning = "Command hanya bisa digunakan di group";
global.ownWarning = "Command kusus owner";

global.footer = "Naitzz - Dev | Uruha";
