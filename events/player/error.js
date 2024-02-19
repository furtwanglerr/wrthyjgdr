module.exports = async (client, textChannel, e) => {
if (textChannel){
   return textChannel?.send(`**에러발생:** ${e.toString().slice(0, 1974)}`)
}
}

