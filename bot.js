const Discord = require("discord.js");
const client = new Discord.Client();
var Kershes = 55;
var Shvillings = 900000;
let NoPing = 0;
let AskCounter = 0;



client.on('ready', () => {
  console.log(`Logged in as ${423868710940311552}!`);
});

client.on('message', msg => {
  let chance3 = Math.random()*17;
  chance3 = Math.floor(chance3);
  if(chance3 == 0){
    AskCounter -= 3;
    if(AskCounter < 0) AskCounter = 0;
    else if(AskCounter > 10) AskCounter = 8;
  }
  
  if (msg.content === 'ping' && NoPing === 0) {
    let chance1 = Math.random()*8;
    chance1 = Math.floor(chance1);
    if(chance1 == 1) {msg.reply('да задрал в жопу иди'); NoPing = 1;}
    else msg.reply('pong');
  }
  
  if(NoPing === 1){
    let chance2 = Math.random()*8;
    chance2 = Math.floor(chance2);
    if(chance2 == 0) NoPing = false;
  }
  
  if (msg.content ==='Был у нас, дружище Мирко!' && msg.author.username == "Банкирский") {
    let chance = Math.random()*8;
    chance = Math.floor(chance);
    if(chance == 0) msg.reply('ухх, непонятно');
    else if (chance == 1) msg.reply('ХВАТИТ БРЕД НЕСТИ ЕЩЕ РАЗ ПРИНЕСЕШЬ Я ТЕБЯ КЛОЧКИ ПО ЗАКОУЛОЧНИКАМ!!!');
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
    AskCounter -= 7;
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
    let jar2 = Math.random()*10/2
    jar2 = Math.floor(jar2);
    if(jar2 == 0) msg.reply('придет время и я сотру тебя как порошок!');
    else if(jar2 == 1) msg.reply('иди загорай в антарктиде морж сраный');
    else if(jar2 == 2) msg.reply('ну ты и мерзкий');
    else if(jar2 == 3) msg.reply('придет время и ты за все расплачешься');
    else msg.reply('на себя посмотри');
  } 
  
  if (msg.content === 'Вахтанг') {
    if(AskCounter == 0) msg.reply('Слушаю');
    else if(AskCounter == 1) msg.reply('Че надо?');
    else if(AskCounter == 2) msg.reply('Да че тебе надо?');
    else if(AskCounter == 3) msg.reply('ЧЕ ТЕБЕ СУКА НАДО');
    else if(AskCounter == 4) msg.reply('ДОСТАЛ');
    else if(AskCounter == 7) msg.reply('ДА СУКАААААА');
    else if(AskCounter == 8) msg.reply('какой у тебя узкий слововый ЗАПАС');
    else if(AskCounter == 9) msg.reply('АААААААААААААА');
    else msg.reply('Я НАЙДУ ТЕБЯ И УБЬЮ!!!!');
    
    
    AskCounter += 1;
  } 
  
  if (msg.content.search(/вахтанг не рулит/i) != -1) {
    let jar = Math.random()*10/3;
    jar = Math.floor(jar);
    if(jar == 0) msg.reply('СОВСЕМ ИДИОТ ТУПОЙ МРАЗЬ СУКА ТВАРЬ ПОГАНАЯ');
    else if (jar == 1) msg.reply('Как такие дебилы как ты еще живут')
    else if (jar == 2) msg.reply('Я ТЕБЯ УШЛЕПОК ШЛЕПАНЕЦ УБЬЮ ДОМА ПРИХОДИ НА УЛИЦУ НОМЕР ШЕТНАДЦАТЬ!');
    else msg.reply('Вообще-то рулит');
    
  } else if (msg.content.search(/вахтанг рулит/i) != -1) {
    msg.react('👍');
  }
  
  if (msg.content.search(/банкирский дурень/i) != -1) {
    msg.react('😄');
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

