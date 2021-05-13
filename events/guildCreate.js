const Discord = require("discord.js");
module.exports = (myths, guild) => {

    const clientadded = new Discord.MessageEmbed()
        .setTitle(`New Server Added ${myths.user.username}`)
        .setDescription(`☬ | Server Name :  ${guild.name}
    ☬ | Server ID : ${guild.id}
    ☬ | Members Count : ${guild.memberCount}
    ☬ | Roles Count : ${guild.roles.cache.size}
    ☬ | Boosts Tier : ${guild.premiumTier}
    ☬ | Boosts Count : ${guild.premiumSubscriptionCount}
    == 
    ☬ | Server Count : ${myths.guilds.cache.size}
    ==`)

    myths.channels.cache.get('788212736525729814').send(clientadded);
    ////////////////////////////////////////////////////////////////////////////////
    let channel = myths.channels.cache.get(guild.channels.cache.filter(c => c.permissionsFor(myths.user).has("SEND_MESSAGES") && c.type === "text").map(r => r.id)[0])
    const guildembed = new Discord.MessageEmbed()
        .setAuthor(myths.user.username, myths.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setThumbnail(myths.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setTimestamp()
        .setColor(`RANDOM`)
        .setTitle(`About ${myths.user.username}`)
        .setDescription(
            `The best free Discord music bot delivering high quality audio No lag

<:Support:757547829333065799> : Bot Invite Link : [Click Me](https://discord.com/api/oauth2/authorize?client_id=731948524203147304&permissions=4019935598&scope=bot)
<:Support:757547829333065799> : Bot Server Support Link : [Click Me](https://discord.com/invite/RxuxPB6)

`)
        .addField(`To get help :`, `> Type ?help or ?helps To Get all commands for help`)

    channel.send(`** __<a:733449022328668250:763911152848994344> Thanks For Adding The Bot to your Server <a:733450878803247198:763911151863857213>__ **`, guildembed)

};