import discord from 'discord.js';

const client = new discord.Client();

client.on('ready', async () => {
  console.log(`Logged as ${client.user.tag}`);
});

client.on('message', async (msg) => {
  if (msg.content === '!rojao') {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play('rojao.mp3');
      dispatcher.on('finish', () => {
        connection.disconnect();
      });
    } else {
      msg.reply('Entre numa hsala de voz para executar este comando!');
    }
  }
});

client.login('Nzk4MTk4NDkzNzAwMTYxNTM4.X_xiRg.6kptlSUI3B_4n85PEdTitQI4lWc');
