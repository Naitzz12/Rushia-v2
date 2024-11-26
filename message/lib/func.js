const momment = require("moment-timezone");

exports.getGroupAdmins = function (participants) {
  let admins = [];
  for (let i of participants) {
    i.admin !== null ? admins.push(i.id) : "";
  }
  return admins;
};

exports.salam = () => {
  const currenttime = momment().tz("Asia/Jakarta");
  const jam = currenttime.hour();
  let salambot;
  if (jam >= 5 && jam < 12) {
    salambot = "Selamat Pagi 🌅";
  } else if (jam >= 12 && jam < 15) {
    salambot = "Selamat Siang 🌇";
  } else if (jam >= 15 && jam < 19) {
    salambot = "Selamat Siang 🌄";
  } else {
    salambot = "Selamat Malam 🌃";
  }
  return salambot;
};
