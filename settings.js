
  const fs = require('fs')
  const chalk = require('chalk')

  // Free Apikey
  global.APIs = {
  riy: 'https://api-riy.herokuapp.com',
  }

  global.APIKeys = {
  'https://api-riy.herokuapp.com': 'RiyGanz',
  }

  // Edit Sesuai Kemauanmu
  global.autoReadGc = true // Ubah Ke false Jika Chat Di Grup Tidak Ingin Di Baca Oleh Bot
  global.autoReadAll = false // Ubah Ke true Jika Ingin Seluruh Chat Di Baca Oleh Bot
  global.anticall = true // Ubah Ke false Jika Tidak Ingin Bot Blockir Yang Telepon
  global.available = false // Ubah Ke false Jika Bot Mu Tidak Ingin Terlihat Online
  global.autoTyping = false // Ubah Ke true Jika Ingin Saat Ada Yang Chat Bot Auto Mengetik
  global.autoRecord = true // Ubah Ke false Jika Tidak Ingin Saat Ada Yang Chat Bot Auto Merekam
  global.multiplier = 89 // Semakin Besar Angkanya Semakin Sulit Untuk Naik Level
  global.limitCount = 10 // 70 Dah Pas Banh
  global.prefa = ['','.','/','#']

  // Other
  global.ownername = 'PemilikBot:089648311511' // Ganti Jadi Namamu
  global.owner = ['6289648311511','6289648311511','6289648311511'] // Kalo Mau Lebih Tambahin Aja
  global.ownernomer = '6289648311511' // Owner Utama Istilahnya
  global.botname = 'AlphinBotz' // Ganti Jadi Nama Botmu
  global.packname = 'AlphinBotz' // Sticker Weem
  global.author = '089648311511' // Sticker Weem
  global.webme = 'https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh' // Ganti Sama Web Mu
  global.linkgroup = 'https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh' // Ganti Sama Link Gc Mu
  global.sessionName = 'session'
  global.youtube = 'https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh' // Ganti Sama Link Yt Mu
  global.github = 'https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh' // Ganti Sama Link Github Mu
  global.instagram = 'https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh' // Ganti Sama Link Ig mu

  // Background Setiap Menu
  global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

  // Tips Menu
  global.tips1 = 'Nomor pemilik bot Wa.me/6289648311511 Grup resmi bot: https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh'
  global.tips2 = 'Nomor pemilik bot Wa.me/6289648311511 Grup resmi bot: https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh'
  global.tips3 = 'Nomor pemilik bot Wa.me/6289648311511 Grup resmi bot: https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh'
  global.tips4 = 'Nomor pemilik bot Wa.me/6289648311511 Grup resmi bot: https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh'
  global.tips5 = 'Nomor pemilik bot Wa.me/6289648311511 Grup resmi bot: https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh'

  // Edit Sesuai Kemauan Mu
  global.rpg = {
  limitEnd: 'Limit Anda Habis\n\n📝 Note : Limit Akan Di Reset Setiap Jam 21:00',
  }

  // Edit Sesuai Kemauanmu
  global.mess = {
  admin: '_Lu Admin? 🤨_',
  botAdmin: '_Bot Bukan Admin 😔_',
  owner: '_Lu Bukan Owner Gw 😠_',
  group: '_Khusus Group 😏_',
  private: '_Khusus Private Chat_',
  bot: '_Khusus Pengguna Nomer Bot_',
  wait: '_Sabar Sedang Di Proses ..._',
  done: '_Done Ngab 🤗_',
  }

  // Kalo Mau Menyesuaikan Nama File Foto Nya
  global.thumb = fs.readFileSync('./media/hinata.jpg')
    
  // Ini Gausah Diubah
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })
