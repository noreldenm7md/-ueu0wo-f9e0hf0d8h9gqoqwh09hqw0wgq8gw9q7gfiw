const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "!";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
    	message.reply('pong');
  	}
});


const Eris = require("eris");
var iiserver = "466681413882609704 ";
var smart= new Eris("NDY3NjYxNjY2NTA3ODE2OTYy.Dit3dw.ocx9UufBH3YwA93PQ0FmJQR6q_0");

client.on("ready", ready => {
setInterval(function(){

client.editChannel("467857579150934027", {name : "."})
client.editChannel("467857579150934027", {name : ".S"})
client.editChannel("467857579150934027", {name : ".St"})
client.editChannel("467857579150934027", {name : ".Sta"})
client.editChannel("467857579150934027", {name : ".Star"})
client.editChannel("467857579150934027", {name : ".Stars"})
client.editChannel("467857579150934027", {name : ".Stars C"})
client.editChannel("467857579150934027", {name : ".Stars Co"})
client.editChannel("467857579150934027", {name : ".Stars Comm"})
client.editChannel("467857579150934027", {name : ".Stars Commu"})
client.editChannel("467857579150934027", {name : ".Stars Commun"})
client.editChannel("467857579150934027", {name : ".Stars Communi"})
client.editChannel("467857579150934027", {name : ".Stars Communit"})
client.editChannel("467857579150934027", {name : ".Stars Community"})


}, 6000);
});


const developers = ["456641975932813345"]
const adminprefix = "!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client.login(process.env.BOT_TOKEN);
