const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "주사위",
  description: "1부터 6까지의 정수를 랜덤으로 뽑아보세요!",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle(Math.floor(Math.random() * (6-1) + 1)); 

      interaction.reply({
        embeds: [musicCommandsEmbed]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};
