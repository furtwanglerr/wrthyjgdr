const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "한강수온",
  description: "퐁당! 좋은 온도를 알려줘요!",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('**현재 한강의 수온은 2873°C예요!**')
        .setImage(`https://www.ydp.go.kr/site/tour/images/contents/cts5316_img_02.jpg`); 

      interaction.reply({
        embeds: [musicCommandsEmbed]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};
