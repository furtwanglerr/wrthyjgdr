const db = require("../mongoDB");
module.exports = {
  name: "previous",
  description: "이전 음악 재생",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: `⚠️ 재생중인 음악 없음!`, ephemeral: true }).catch(e => { })
      try {
        let song = await queue.previous()
        interaction.reply({ content: `**전에 재생했던 음악 재생중!**` }).catch(e => { })
      } catch (e) {
        return interaction.reply({ content: `❌ 전에 재생한 음악 없음!`, ephemeral: true }).catch(e => { })
      }
    } catch (e) {
    console.error(e); 
  }
  },
};
