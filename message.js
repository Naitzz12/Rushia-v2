require("./settings");
require("./message/credit/credit"); // Tolong jangan hapus credit tersebut
const { makeWASocket, useMultiFileAuthState } = require("baileys");
const pino = require("pino");
const { tikdown, ytdown } = require("nayan-media-downloader");
const YouTube = require("youtube-sr").default;
const axios = require("axios");
const fs = require("fs");

async function connectWhatsapp() {
  const auth = await useMultiFileAuthState("session");
  const naitzz = makeWASocket({
    printQRInTerminal: true,
    auth: auth.state,
    logger: pino({ level: "silent" }),
  });
  naitzz.multi = true;
  naitzz.ev.on("creds.update", auth.saveCreds);
  naitzz.ev.on("connection.update", async ({ connection }) => {
    if (connection === "open") {
      console.clear();
      console.log("BOT SIAP! ✓\nBot dibuat oleh : Naitzz");
    } else if (connection === "close") {
      await connectWhatsapp();
    }
  });

  naitzz.ev.on("messages.upsert", async (chatUpdate) => {
    const chat = chatUpdate.messages[0];
    if (!chat.message) return;
    chat.message =
      Object.keys(chat.message)[0] === "ephemeralMessage"
        ? chat.message.ephemeralMessage.message
        : chat.message;
    if (chat.key && chat.key.remoteJid === "status@broadcast")
      return naitzz.readMessages([chat.key]);
    if (
      !naitzz.public &&
      chat.key.remoteJid !== ownNum + "@s.whatsapp.net" &&
      !chat.key.fromMe &&
      chatUpdate.type === "notify"
    )
      return;
    if (chat.key.id.startsWith("BAE5") && chat.key.id.length === 16) return;
    const isGroup = chat.key.remoteJid.endsWith("@g.us");
    const sendID = chat.key.participant || chat.key.remoteJid;
    const sender = isGroup
      ? chat.key.participant
        ? chat.key.participant
        : chat.participant
      : chat.key.remoteJid;
    const chatsender = chat.key.remoteJid;
    const pushname = chat.pushName || "No Name";
    const pesan = (
      chat.message?.extendedTextMessage?.text ??
      chat.message?.ephemeralMessage?.message?.extendedTextMessage?.text ??
      chat.message?.conversation
    )?.toLowerCase();
    const text =
      chat.message?.conversation ||
      chat.message?.extendedTextMessage?.text ||
      chat.message?.ephemeralMessage?.message?.extendedTextMessage?.text;
    chat.isBaileys =
      chat.key.id.startsWith("BAE5") || chat.key.id.startsWith("3EB0");
    require("./message/command")(
      naitzz,
      text,
      pesan,
      pushname,
      chatsender,
      chat,
      tikdown,
      ytdown,
      YouTube,
      axios,
      sender,
      isGroup,
      sendID
    );

    console.log(`[ ${text} ] | Pesan Dari ${pushname}`);
  });
  // naitzz.ev.on("group-participants.update", async (groupUpdate) => {
  //   if (groupUpdate.action == "add") {
  //     await naitzz.sendMessage(groupUpdate.id, {
  //       text: "Hallo, Selamat Datang!!",
  //     });
  //   }
  // });
  naitzz.public = true;
}

connectWhatsapp();
