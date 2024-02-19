const db = require("../mongoDB");
module.exports = {
  name: "loop",
  description: "반복재생",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    
    try {
      const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: '⚠️ 재생중인 음악 없음', ephemeral: true }).catch(e => { })
  
      let button = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("큐")
          .setStyle(ButtonStyle.Secondary)
          .setCustomId("큐"),
        new ButtonBuilder()
          .setLabel("현재 곡")
          .setStyle(ButtonStyle.Secondary)
          .setCustomId("현재 재생중인 곡"),
        new ButtonBuilder()
          .setLabel("반복재생 멈추기!")
          .setStyle(ButtonStyle.Danger)
          .setCustomId("닫기")
      )

      const embed = new EmbedBuilder()
        .setColor('#fc4e03')
        .setAuthor({
        name: '반복재생',
        iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157318080670728283/7905-repeat.gif?ex=65182bf4&is=6516da74&hm=9ae58f40fcea5dc42a2a992bbd159d50116b3bafe5c5f7728e3a5276442efd2a&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
        .setDescription('**반복재생중! **')
     
      interaction?.reply({ embeds: [embed], components: [button], fetchReply: true }).then(async Message => {

        const filter = i => i.user.id === interaction.user.id
        let col = await Message.createMessageComponentCollector({ filter, time: 120000 });

        col.on('collect', async (button) => {
          if (button.user.id !== interaction.user.id) return
          const queue1 = client.player.getQueue(interaction.guild.id);
          if (!queue1 || !queue1.playing) {
            await interaction?.editReply({ content: '⚠️ 현재 재생중인 음악 없음!', ephemeral: true }).catch(e => { })
            await button?.deferUpdate().catch(e => {})
          }
          switch (button.customId) {
            case 'queue':
              const success = queue.setRepeatMode(2);
              interaction?.editReply({ content: `✅ 큐 반복중!` }).catch(e => { })
              await button?.deferUpdate().catch(e => {})
              break
            case 'nowplaying':
              const success2 = queue.setRepeatMode(1);
              interaction?.editReply({ content: `✅ 반복재생 켜짐!` }).catch(e => { })
              await button?.deferUpdate().catch(e => {})
              break
            case 'close':
              if (queue.repeatMode === 0) {
                await button?.deferUpdate().catch(e => {})
                return interaction?.editReply({ content: '⚠️ 반복재생 이미 꺼짐!', ephemeral: true }).catch(e => { })
              }
              const success4 = queue.setRepeatMode(0);
              interaction?.editReply({ content: '▶️ 반복재생 끔' }).catch(e => { })
              await button?.deferUpdate().catch(e => {})
              break
          }
        })
        col.on('end', async (button) => {
          button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setStyle(ButtonStyle.Secondary)
              .setLabel("타임아웃")
              .setCustomId("타임엔드")
              .setDisabled(true))

          const embed = new EmbedBuilder()
            .setColor('#fc5203')
            .setTitle('▶️ 반복재생 꺼짐!')
            .setTimestamp()

          await interaction?.editReply({ content: "", embeds: [embed], components: [button] }).catch(e => { });
        })
      }).catch(e => { })

    } catch (e) {
    console.error(e); 
  }
  }
}
