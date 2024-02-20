const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "한강수온",
  description: "빠지기 좋은 온도를 알려줘요!",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('**퐁당하기 좋은 온도를 알려드리죠!**')
        .addFields(
          { name: '한강물 온도', value: '11°C' }
        )
        .setImage(`https://www.ydp.go.kr/site/tour/images/contents/cts5316_img_02.jpg`); 
      const button1 = new ButtonBuilder()
        .setLabel('보다정확한')
        .setURL('https://hangang.ivlis.kr/')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('한강수온은')
        .setURL('https://hangang.ivlis.kr/')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('여기서확인')
        .setURL('https://hangang.ivlis.kr/')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};
