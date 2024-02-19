const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "time",
  description: "음악을 몇분동안 재생했는지 나타냅니다",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const queue = client.player.getQueue(interaction.guild.id);

      if (!queue || !queue.playing) return interaction.reply({ content: '⚠️ 재생중인 음악 없음!', ephemeral: true }).catch(e => { })

      let music_percent = queue.duration / 100;
      let music_percent2 = queue.currentTime / music_percent;
      let music_percent3 = Math.round(music_percent2);

      const embed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle(queue.songs[0].name)
        .setThumbnail(queue.songs[0].thumbnail)
        .setDescription(`**${queue.formattedCurrentTime} / ${queue.formattedDuration} (${music_percent3}%)**`)
      interaction.reply({ embeds: [embed] }).catch(e => { })

    } catch (e) {
      console.error(e);
    }
  },
};
