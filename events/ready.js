exports.run = (client) => {
    logger.info('May is ready to use');
    logger.debug(`Logged in as ${client.user.tag}`);
    logger.debug(`Serving ${client.guilds.size} servers with ${client.users.filter(i => !i.bot).size} users`);
    client.user.setPresence({ game: { name: 'tests', type: 1, url : 'https://twitch.tv/theonlyartz' } }).catch( err => logger.error(err));
};
