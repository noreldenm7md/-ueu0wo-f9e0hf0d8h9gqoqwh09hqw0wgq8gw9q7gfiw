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
var eris= "466681413882609704";
var eris = new Eris("NDY3NjYxNjY2NTA3ODE2OTYy.Dit3dw.ocx9UufBH3YwA93PQ0FmJQR6q_0");
 
eris.on("ready", ready => {
setInterval(function(){
 
            var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
            week = currentTime.getDay();
           
             
 
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }

eris.editChannel("467857579150934027", {name : "🕐 Time   [" + hours + ":" + minutes  +" " + suffix + "]"}) 
eris.editChannel("467857579150934027", {name : "📅 Date " + "[" + day + "-" + month + "-" + years + "]"})




}, 6000);
 
});






client.login(process.env.BOT_TOKEN);
