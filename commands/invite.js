const { CLient , MessageEmbed } = require("discord.js");
const moment = require("moment");
const { prefix } = require("../config.json");
const {imageutil} = require("..//config.json")
exports.run = async(myths, msg, args) => {

const inviteembed = new MessageEmbed()
.setAuthor(myths.user.username, myths.user.displayAvatarURL({ format : 'png' , dynamic: true, size: 2048 }))
.setFooter(`Requested By ${msg.author.tag}`, msg.author.displayAvatarURL({  dynamic: true, size: 2048 }))
.setTimestamp()
.setColor(`RANDOM`)
        .setTitle(`${myths.user.username} Invite Link`)
        .setDescription(`**
        ⚜ : Bot Invite Link : [Click Me](https://discord.com/api/oauth2/authorize?client_id=731948524203147304&permissions=2146823551&scope=bot)
        ⚜ : Bot Server Support Link : [Click Me](https://discord.com/invite/kp5kb8wSMp)
        **`)
    msg.channel.send(inviteembed);
}
