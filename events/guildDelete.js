const Discord = require("discord.js");
module.exports = (myths, guild) => {

    const clientdelete = new Discord.MessageEmbed()
        .setTitle(`New Server Kicked ${myths.user.username}`)
        .setDescription(`☬ | Server Name :  ${guild.name}
        ☬ | Server ID : ${guild.id}
        ☬ | Members Count : ${guild.memberCount}
        ☬ | Roles Count : ${guild.roles.cache.size}
        ☬ | Boosts Tier : ${guild.premiumTier}
        ☬ | Boosts Count : ${guild.premiumSubscriptionCount}
        == 
        ☬ | Server Count : ${myths.guilds.cache.size}
        ==`)


    myths.channels.cache.get('788212737721237505').send(clientdelete);
};