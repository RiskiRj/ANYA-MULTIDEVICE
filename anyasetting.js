/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
   
      * Recode By RiskiGanz
   * Contact Me on wa.me/6281339888334
   * Follow https://github.com/RiskiRj
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
		'https://zenzapi.xyz': 'Your Apikey', //apikey
}

// Other
global.owner = ['no lu'] //masukin no kalian
global.namaowner = ['nama lu'] //ganti dengan nama kalian
global.namabot = ['π°π½ππ°-πΌπ³'] // nama bot
global.footer = ['π°π½ππ°-πΌπ³ π±π ππΈππΊπΈπΆπ°π½π'] //footer nya di ganti terserah
global.premium = ['No premium user'] //premium user 
global.packname = 'ππππππΆπππ£' //packname nya
global.author = 'WhatsApp Bot' //author 
global.myweb = 'https://github.com/RiskiRj/Anya-md' //jan di ganti 
global.vr = '2.0.0' //version bot (baru update penambahan thumbnail url) 
global.sessionName = 'anyamd' // ini untuk nama file session nya
global.prefa = ['','!','.','π¦','π€','πΏ']
global.sp = 'β'
global.mess = {
    success: 'β Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'sabar πΏ...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.tq = fs.readFileSync('./mediacok/tq.jpg')
global.rsk = fs.readFileSync('./mediacok/rsk.jpg')
global.name = fs.readFileSync('./mediacok/name.jpg') 
global.sc = fs.readFileSync('./mediacok/sc.jpg')
global.thumb = fs.readFileSync('./mediacok/anya.jpg')
global.ok = fs.readFileSync('./mediacok/ok.jpg') 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
