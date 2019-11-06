import * as bot from "bbot";

const dotEnvBotName = process.env.BOT_NAME || "bot";
const dotEnvBotVersion = process.env.BOT_VERSION || "1.0.0";

export const asimovDirective = () => {
  bot.global.direct(
    {
      contains: "are you a robot"
    },
    b => b.reply("Yes, I'm a robot. :robot:"),
    {
      id: "asimovDirective-direct-robot",
      force: true
    }
  );

  bot.global.direct(
    {
      contains: "identify"
    },
    b => b.reply(dotEnvBotName + ", Version " + dotEnvBotVersion),
    {
      id: "asimovDirective-direct-identify",
      force: true
    }
  );
};
