const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "stop",
  description: "음악 멈추기.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ 재생중인 음악 없음!', ephemeral: true });
      }

      queue.stop(interaction.guild.id);

      const embed = new EmbedBuilder()
        .setColor('#f1002c')
        .setAuthor({
          name: '음악멈춤',
          iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157305318255116400/pngtree-vector-stop-icon-png-image_4233262.jpg?ex=65182011&is=6516ce91&hm=d5a8ca6010716bae836b025f8d36557a95f14c13a705f65eb09a54161649c795&',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
        .setDescription('**음악을 성공적으로 멈춤!**')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};


