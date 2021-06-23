const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const db = require('wio.db')
require("./util/eventLoader")(client);


//------------------------------
var prefix = ayarlar.prefix;
var sahip = ayarlar.sahip;
//------------------------------


//--------- Gerekliler ------------//
let logkanalıı = "LOG KANAL ID"
//--------- Gerekliler ------------//


client.on("message", message => {

//----- MESAJI ATAN KİŞİ BOTSA ONA XP EKLEMEZ VE RETURN ATAR -----//  
if(message.author.bot) {
  return
}
//----- MESAJI ATAN KİŞİ BOTSA ONA XP EKLEMEZ VE RETURN ATAR -----//  


//----- VERİ ÇEKME İŞLEMİ -----//  
let logkanalı = message.guild.channels.cache.get(logkanalıı)
 let toplammesaj = db.fetch(`${message.guild.id}_${message.author.id}.mesaj`)
 let toplamxp = db.fetch(`${message.guild.id}_${message.author.id}.xp`)
 let toplamlevel = db.fetch(`${message.guild.id}_${message.author.id}.level`)
 //----- VERİ ÇEKME İŞLEMİ -----//  

 //----- VERİ EKLEME İŞLEMİ -----//  
 db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
 db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
 //----- VERİ EKLEME İŞLEMİ -----//  


if (toplammesaj === 3) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`1\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`1\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

if (toplammesaj === 50) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`2\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`2\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

if (toplammesaj === 150) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`3\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`3\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

if (toplammesaj === 250) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`4\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`4\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

if (toplammesaj === 350) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`5\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`5\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

if (toplammesaj === 550) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`6\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`6\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

if (toplammesaj === 650) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`7\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`7\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

if (toplammesaj === 850) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`8\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`8\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

if (toplammesaj === 1000) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`9\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`9\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

if (toplammesaj === 1250) {
  logkanalı.send(`**${message.author} Level Atladı! , Yeni Leveli \`10\`**`)
  message.channel.send(`**${message.author} Level Atladı! , Yeni Leveli \`10\`**`)
  db.add(`${message.guild.id}_${message.author.id}.mesaj`, 1)
  db.add(`${message.guild.id}_${message.author.id}.xp`, 3)
  db.add(`${message.guild.id}_${message.author.id}.level`, 1)
}

})

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

/*

Selam Dostum :)
------------------------------------------------------------------------
Öncelikle Bu Altyapı RexEviL Tarafından Üretilmiştir Hiçbir Yerden Çalınmamış veya İlham Alınmamıştır !
------------------------------------------------------------------------
! ! ! Çalınması Durumunda Gerekli Tüm İşlemler Yapılır Bilginize ! ! !
------------------------------------------------------------------------
Bu Altyapı VenoM Ekibi Tarafından Kodlanmıştır !
------------------------------------------------------------------------
VenoM Youtube ( rexevil ) : https://www.youtube.com/channel/UCDi0kvLfOaBI-BbZNyBz6NA

VenoM Youtube Discord : https://www.youtube.com/channel/UCDi0kvLfOaBI-BbZNyBz6NA
------------------------------------------------------------------------
Güle Güle Kullan Yapamadığın Yer Olursa Discord Sunucumuza Gel Yardım Ederiz :)
*/



