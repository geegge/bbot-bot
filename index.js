const bot = require("bbot");

require("./src/main.js");
const dotEnvProductionEnv = process.env.NODE_ENV || false;

//in dev bot has to wait for startup of local rocketchat enviroment
if (dotEnvProductionEnv === "production") {
  bot.start();
} else {
  setTimeout(() => {
    bot.start();
  }, 60000);
}
