const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

const myid = ['493057051291811844'];// ايدي حسابك
const prefix = ['1']

client.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});


client.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

const myid2 = ['493057051291811844'];// ايدي حسابك
const prefix2 = ['2']

client2.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});


client2.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
    
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
    
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
