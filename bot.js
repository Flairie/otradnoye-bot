const Discord = require("discord.js");
const client = new Discord.Client();
var Kershes = 55;
var Shvillings = 900000;



client.on('ready', () => {
  console.log(`Logged in as ${423868710940311552}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content === 'What is the wahtang?') {
    msg.reply('I, Wahtang, am the keeper of knowleges of Otradnoye. You can ask me about anything here.');
  }

  if (msg.content === 'What is the legendary roles?') {
    msg.reply('Legendary role is the role what can be used by an only one person in Otradnoye');
  }

  if (msg.content === 'What is the battle system?') {
    msg.reply('Battle System - machanics of Otradnoe that will be added much later');
  }
 
  if (msg.content === 'What is the otradnoye-bot?') {
    msg.reply('Damned Otradnoye-bot is the fokkin piece of shut thats fokkin never worked right! Dumnit!');
  }
  
  if (msg.content === 'Вахтанг извини') {
    msg.reply('Ну лана лана');
    msg.author.unblock();
  } 
  
  if (msg.content === 'Вы охренели!') {
    msg.reply('САМ ОХРЕНЕЛ БЛИН НЕЩАСНЫЙ!');//((
  }
  
  if (msg.content ==='чё' && msg.author.username == "otradnoye-bot") {
    msg.channel.sendMessage('БУЙ ЧЕРЕЗ ПЛЕЧЁ');
  }
  
  if (msg.content ==='БУЙ ЧЕРЕЗ ПЛЕЧЁ' && msg.author.username == "ubugged-otradnoe") {
    msg.react('😂');
  }
  
  if (msg.content === 'Вахтанг - дебил!' && msg.author.username === 'otradnoye-bot') {
    msg.reply('придет время и я сотру тебя как порошок!');
  } 
  
  if (msg.content === 'Вахтанг') {
    msg.reply('Слушаю');
  } 
  
  if (msg.content.search(/вахтанг не рулит/i) != -1) {
    msg.reply('СОВСЕМ ИДИОТ ТУПОЙ МРАЗЬ СУКА ТВАРЬ ПОГАНАЯ');
  } else if (msg.content.search(/вахтанг рулит/i) != -1) {
    msg.react('👍');
  }
  
  if (msg.member.nickname === 'Покровская') {
    msg.reply("Тебя здесь не уважают");
  }
  
 //msg.reply(msg.author.username);
  
  if (msg.content === 'Вахтанг дебил' || msg.content === 'Вахтанг удалил мое сообщение' || msg.content === 'Вахтанг зашкварный') {
    msg.delete(5);
    msg.author.send("Я ТИБЯ КАК ПСИНУ ПРИХЛОПНУ!");
    msg.member.ban(1);
    msg.author.block();
  }
  
  if (msg.content === '/mymoney' && msg.channel.topic === 'Bank-de-koval') {
    msg.reply('ЗАТКНИСЬ МРАЗЬ!');
  }
  
  if (msg.content === '/treasury' && msg.channel.topic === 'Treasury of Otradnoye') {
    msg.reply('Бюджет града составляет ' + Shvillings.toString() + ' швиллиногов и ' + Kershes.toString() + ' кершей.');
  }
  
  if (msg.content === '/nalogytest' && msg.channel.topic === 'Treasury of Otradnoye') {
    msg.reply('Налоги отправленны.');
    Shvillings += 25000;
    Kershes += 5;
  }
  
  if (msg.content === 'Вы живете не в том мире в котором вы думаете') {
    var success = false;
    msg.member.edit({nick: "Купоцый"});
    
    //msg.reply(msg.guild.roles.array().length.toString());
    /*for(var i = 0; i < msg.guild.roles.array().length; i++) {
      //msg.reply(msg.guild.roles[i].name);
      *if(msg.server.roles[i].name === 'Купцовский!'){
        let myRole = msg.guild.roles[i];
        success = true;
        break;
      }
    }*/

    msg.channel.sendMessage('Кто-то открыл ужасную тайну вселенной, и Отрадное погрузилось в уныние. Только Доктор Карлов может его излечить. Он среди вас.');
    if(success) msg.autor.addRole(myRole).catch(console.error);
    else msg.reply('нихуя не знаю');
  }
  
});

client.login(process.env.BOT_TOKEN); // wow вай

