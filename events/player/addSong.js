const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
        name: '큐 추가됨:  /skip 명령어를 이용하여 재생',
        iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157218651179597884/1213-verified.gif?ex=6517cf5a&is=65167dda&hm=bc8fb4414cb412587ade0af285b77569d2568214cf7d6baab8702ddeb6c38ad5&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
        .setDescription(`<@${song.user.id}>, **${song.name}**`)
        .setColor('#14bdff')
        .setFooter({ text: '/queue로 더 많은 정보' });
      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}



