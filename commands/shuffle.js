const { EmbedBuilder } = require("discord.js")
const config = require("../config.js");
const db = require("../mongoDB");
module.exports = {
  name: "shuffle",
  description: "큐에 있는 음악들 섞기",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    try {

        const queue = client.player.getQueue(interaction.guild.id);
        if (!queue || !queue.playing) return interaction.reply({ content: `⚠️ 재생중인 음악 없음!`, ephemeral: true }).catch(e => { })
        try {
          queue.shuffle(interaction)
        return interaction.reply({ content: `<@${interaction.user.id}>, 음악섞음!` }).catch(e => { })
        } catch(err) {
        return interaction.reply({ content: `**${err}**` }).catch(e => { })
        }
      } catch (e) {
      console.error(e);
    }
  },
};
