const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "봇 제작자",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const youtubeLink = 'https://youtube.com/shorts/a0Cllv73BaU?feature=share';
      const InstagramLink = 'https://youtube.com/shorts/a0Cllv73BaU?feature=share';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: '제작자',
          iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157310253520662638/2443-iconperson.png?ex=651824aa&is=6516d32a&hm=0becc4a0fda01e5a02a63cf098db30c287e60a474f8d2da4ddeae7f47d98a5a3&',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
            .setDescription(`__**제작자 소개**__:\n\n 신재라고 합니다!\n 유튜브 : (${youtubeLink})\n 채널 : (${InstagramLink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
