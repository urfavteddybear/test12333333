module.exports = {
  token: process.env.token || "", //Bot's Token
  clientId: process.env.clientId || "", //ID of the bot
  clientSecret: process.env.clientSecret || "", //Client Secret of the bot
  prefix: process.env.PREFIX || "", // Default Prefix
  mongoURL: process.env.mongo || "", // MongoDB URL
  port: 4200, //Port of the API and Dashboard
  scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  serverDeafen: true, //If you want bot to stay deafened
  defaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  supportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Issues: "https://github.com/SudhanPlayz/Discord-MusicBot/issues", //Bug Report Link
  permissions: 826839002433, //Bot Inviting Permissions
  disconnectTime: 30000, //How long should the bot wait before disconnecting from the voice channel. in miliseconds. set to 1 for instant disconnect.
  alwaysplay: true, // when set to true music will always play no matter if theres no one in voice channel.
  debug: false, //Debug mode
  // Lavalink server; optional public lavalink -> https://lavalink-list.darrennathanael.com/
  // The default one should work fine, these are picked due to their speed and not using cloudflare.
  nodes: [
    {
      identifier: process.env.identifier1 || "", //- Used for indentifier in stats commands.
      host: process.env.host1 || "",
      port: process.env.port1 || 0,
      password: process.env.pass1 || "",
      retryAmount: 9999999999999999, //- The amount of times to retry connecting to the node if connection got dropped.
      retryDelay: 6000, //- Delay between reconnect attempts if connection is lost.
      secure: process.env.secure1 || , //- Can be either true or false. Only use true if ssl is enabled!
    },
//     {
//       identifier: process.env.identifier2 || "", //- Used for indentifier in stats commands.
//       host: process.env.host2 || "",
//       port: process.env.port2 || ,
//       password: process.env.pass2 || "",
//       retryAmount: 9999999999999999, //- The amount of times to retry connecting to the node if connection got dropped.
//       retryDelay: 6000, //- Delay between reconnect attempts if connection is lost.
//       secure: process.env.secure2 || , //- Can be either true or false. Only use true if ssl is enabled!
//     },
    
  ],
  embedColor: "#ffeac8", //Color of the embeds, hex supported
  presence: {
    //PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "online", // You can have online, idle, and dnd(invisible too but it make people think the bot is offline)
    activities: [
      {
        name: "Music | >help", //Status Text
        type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING
        url: process.env.stream || "",
      },
    ],
  },
  iconURL: "https://cdn.darrennathanael.com/icons/spinning_disk.gif", //This icon will be in every embed's author field
};
