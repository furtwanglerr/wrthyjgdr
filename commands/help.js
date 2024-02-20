const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "봇과 명령어 정보",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('**음악관련**')
        .addFields(
          { name: 'Play', value: '명령어 뒤에 링크나 듣고싶은 음악이름을 적어 음악재생' },
          { name: 'Stop', value: '듣던 음악을 중지' },
          { name: 'Queue', value: '이 서버에 있는 음악 큐 보기' },
          { name: 'Skip', value: '현재 재생중인 음악 스킵' },
          { name: 'Pause', value: '현재 듣고있는곡 재생 멈추기' },
          { name: 'Resume', value: '재생 멈춘 음악 다시 재생하기' }
        )

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('**기본 명령어**')
        .addFields(
          { name: 'Ping', value: "봇의 핑 확인" },
          { name: 'Clear', value: '서버에 있는 큐 정리' },
          { name: 'Volume', value: '볼륨조정' }
        ) 
        .setImage(`https://tse4.mm.bing.net/th?id=OIP.iAf76KceapJNmlgAnAjhYgHaHa&pid=Api&P=0&h=220`);
      const button1 = new ButtonBuilder()
        .setLabel('신재')
        .setURL('https://youtu.be/3djvQvlY5ZI')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('유튜브')
        .setURL('https://youtu.be/3djvQvlY5ZI')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('채널')
        .setURL('https://youtu.be/3djvQvlY5ZI')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};


