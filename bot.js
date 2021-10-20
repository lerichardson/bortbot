const Discord = require(`discord.js`);
const { prefix } = require(`./bot-config.json`);
const { swear_words, mute_content } = require(`./swear-words.json`);
const client = new Discord.Client();
client.once(`ready`, () => {
	console.log(`Ready!`);
});
client.on('guildMemberAdd', member => {
    member.guild.channels.get(member.guild.channels.get('JOIN/LEAVE Channel ID')).send(new Discord.MessageEmbed()
	.setColor(`#FFF200`)
	.setTitle(`Hi!`)
	.setDescription(`Thanks for adding me!`)
	.addFields(
		{ name: `Command Prefix`, value: `>` },
		{ name: `Invite Link`, value: `https://shrtco.de/bortbot` },
		{ name: `Support Server`, value: `https://shrtco.de/bortbothelp` },
		{ name: `Github`, value: `https://bingus.link/BortbotGithub` }
	)
	.setFooter(`Bortbot v0.75.3 by Litbelb`));
});
const commandListEmbed = new Discord.MessageEmbed()
	.setColor(`#FFF200`)
	.setTitle(`Commands`)
	.setDescription(`List of bortbot commands`)
	.addFields(
		{ name: `Command Prefix`, value: `>` },
		{ name: `All commands`, value: `All of my commands can be found at https://docs.bortbot.com/cmd` },
		{ name: `Popular commands`, value: `\`vox\`: All vox commands can be found at https://docs.bortbot.com/cmd/vox\n\`clear\`: Clears the past 100 messages in the channel.\n` },
		{ name: `Donate`, value: `Run \`donate\` to figure something out.\n` },
		{ name: `Open Source`, value: `bortbot is open source. You can help the development of bortbot on github: https://bingus.link/BortbotGitHub.\n` }
	)
	.setFooter(`Bortbot v0.75.3 by Litbelb`);
client.on(`message`, message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === `privacy`) {
        message.channel.send(`Bortbot drops any logs every 30 days and are kept on my server and never sold.`);
		console.log(`Privacy command was run`);
	} 
	if (command === `ping`) {
		message.channel.send(`:ping_pong: Pong.`);
		console.log(`Ping requested.`);
	}
	if (command === `icon`) {
		message.delete();
		message.channel.send(`You found a secret command!`);
		message.channel.send(`https://images-ext-2.discordapp.net/external/n9RHHM0t3_YpKVFVSr5uwOMCb6qk-3Q0MWMcyhDcsCk/%3Faccess_token%3DEwA4A61DBAAUmcDj0azQ5tf1lkBfAvHLBzXl5ugAAdeCkxCaOdk6TjNMVmtEzrtuFZhZZor4O%2FskBpmlsv1pXxTbv5zvH5QQ1LAk4%252bJ1kgswkCRzPUdEF%2Fa%2FaRt13Iuc07Gs%252bwRUdl%252bwzv4YuWMaYw6qsUJE3ebpiVDOZf8v2VY%252bk1GX4XPc3iOs4xRow6EUaKM%2FXO5lNEKsVJMVI8Hd7I1eYKtNq%252bZ8VTVc0qbHiptypVqh%252bdaauuv%2FrWXW5uNR7Vm67qDZ1Rfqioi%2FJFXa1wwdh96YU0u%2FsaOhieDQ70FFAwX8hs6xVGTIcDEPjMLO5nkd8uljs7r%252bTbkhWEYOmiv2TkWX1goszjmFZKsoGTN20v02KOy6%252bG0NqLaO07EDZgAACDuXDNzqWQJzCALlXFa1d3m8XsS%2FlIJOjNw2o2M7b6CsQVCevuKJjl1WS%2FTUWEgrR9h%252bn6XCgjuPRzcFWG4IUDNGp2h8OG2tqxBscvl3pC0O00o99HqCInGbjKvjNHcNksS6cB4Fn9nj%2FTwFHqJhB%2FHVvP8EPzZ5fk1LqMD6n5636U%252bpAbMp%252bdRGXXfH7m4mFEaXY0lUEL48vMK5w0SU8KnrZ8oKjjrRLp7KDnZi6ewLD6sFvhgJY9teSfpqKLuYlFcOiQkpEIMoaJYW7yJ1grmIR1TdeFKdBh1FWXhYOcLgnAUNzdTlU1bnC8irnsB46M9jXLngIJJIqKVg2hHtEGzOm535YKLp4kTUwHz9GR%2Fjej4fq9zS3%252bQH52oYfSZ9gwYqe2u8lEOjmQImhPUeI%2F1ietpZHIbPT3TjmQE5RniZfqIkl%252btwjeRMD%252bWA8L6t3YHIeohCoU7OrQSCXZ%2FImGQG3CI%2FpN8kKlODWZKJ4ja%2FbsmeUCB38wFdI%252bXyZ85%2FCAQn48DLCD3lMxxlf22aMnPRvDYBQJ5Kjen1pRwFtXu37VgCeOVwd90lo3n%252bXk4RJKenghZVd6NBtSrwvjdjfxX7FdWhqbMESJUIk8cer39qDF9O83NzDWRgx2BgY2MAHx4FaiAyqh4GqNRBHLBLLQBjYCecC5jBWuGH90CuX5klhFs0ldrFct4NY4rgBLEFFLS8EgI%253d/https/public.dm.files.1drv.com/y4m_e2qinHrt3x1mn994enpmi_7Vp9nfdxcDCFR256Cm0DrqQlexNj16sWfQppXofOVf6kHUqhHCC_HZGQPp-UNu9u4WR42PTCKxJir7IcqycpL1_5JtVYBkY1Srn-uN_iHurNwlcLV9uPJ98u97as9r7mc562p5hZaJeNQeXyGt6z42eTnMWWKGDwY4lF0ihPBQWw6PeB-bK3To2ecBD1wPZX5gEP6QpRTDS8GRlzVkQM`);
	}
	if (command === `levi's-newest-medium-article`) {
		message.delete();
		message.channel.send(`You found a secret command!`);
		message.channel.send(`https://litbelb.medium.com/making-a-full-fledged-loader-display-to-removal-18b4e61a77ad`);
		message.channel.send(`And, it's been chosen for promotion!`);
	}
	if (command === `cf`) {
		message.channel.send(`Pinging Cloudflare...`);
		message.channel.send(`URL: 'https://api.cloudflare.com/client/v4/zones/cd7d0123e3012345da9420df9514dad0'`);
		message.channel.send(`
		\`\`\`json
		"Successful Ping!"\`\`\`
		`);
	}
	if (command === `clear`) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
			message.channel.startTyping();
			setTimeout(function(){ message.channel.stopTyping(true); message.channel.bulkDelete(100); }, 2500);
			console.log(`Successfully cleared channel: ${message.channel}`);
			setTimeout(function(){ message.channel.send(`Success! This message will be deleted in 5`); }, 3500);
			setTimeout(function(){ message.channel.send(`Success! This message will be deleted in 4`); }, 4500);
			setTimeout(function(){ message.channel.send(`Success! This message will be deleted in 3`); }, 5500);
			setTimeout(function(){ message.channel.send(`Success! This message will be deleted in 2`); }, 6500);
			setTimeout(function(){ message.channel.send(`Success! This message will be deleted in 1`); }, 7500);
			setTimeout(function(){ message.channel.bulkDelete(100); }, 8500);
		}
		if (message.member.hasPermission(`ADMINISTRATOR`) === false) {
			message.channel.startTyping();
			message.channel.send(`Bruh. You don't have that permission.`);
			message.channel.stopTyping();
			console.log(`User ${message.member.id} tried to clear channel ${message.channel}`);
		}
	}
	if (command === `help`) {
		message.channel.startTyping(5);
		setTimeout(function(){ message.channel.send(commandListEmbed); message.channel.stopTyping(true); }, 2500);
	}
	if (command === `?`) {
		message.channel.startTyping(5);
		setTimeout(function(){ message.channel.send(commandListEmbed); message.channel.stopTyping(true); }, 2500);
	}
	if (command === `donate`) {
		message.channel.send(`You want to donate? Dang! That's awesome! Please head over to my gived page (https://app.gived.org/moneypls/litbelb)`)
	}
// VOX commands
    if (command === `vox`) {
                message.channel.send(`https://dm2302files.storage.live.com/y4mljd2uXKEHYSzP5KDIMeEsEA0KU3CfxJi_NECRdP2eWhzH_qo0E3XaGU623FFjacBSNXfu25CyNYUn6QZjVnUsbf8mvtDBpcMG2VCP3Kz66GkdtM1S90PxMhoDtbCr43Re96qH74RqNOA_jW22KSKr-bX9O4grZOy_SfEfCedirw78iGIuBAUSt_c4e2YU3IOVdBUriUT8ro6ogqeQmLaig/Screenshot_20210416-134135__01.jpg?psid=1&width=670&height=404`);
	}
	if (command === 'vox-mod') {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
			if (!args.length) {
				return message.channel.send(`You didn't provide an operator to the mod command!`);
			} else if (args[0] === 'foo') {
				return message.channel.send
			}
		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
		}
		if (message.member.hasPermission(`ADMINISTRATOR`) === false) {
			message.channel.send("That's a special command for admins, not for you, you puny not-moderator");
		}
	}
	if (command === `vox-sus`) {
		message.channel.send(`I'm working on this command, after it blew up. If you'd like to help with development, please create a pr on github (https://bingus.link/BortbotGitHub)`)
	}
});
// Handle swear words
client.on(`message`, message => {
	for (var i=0; i < swear_words.length; i++) {
		if (message.content.toLowerCase.includes(swear_words[i])) {
			message.delete();
			message.channel.send(mute_content);
			console.log(`Someone tried to swear in channel ${message.channel}`);
		}
   	}
});
client.login(process.env.DISCORD_TOKEN);