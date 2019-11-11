// ESM syntax is supported.
export {};
import * as bot from "bbot";
import { asimovDirective } from "./rules/directives";
import { weather } from "./rules/weather";

asimovDirective();
weather();

bot.global.text(/say hello to (.*)/i, b => {
  b.respond("Hello " + b.match[1]);
});

bot.global.text(
  {
    contains: ["hello"]
  },
  b => b.respond("Hello 👋"),
  {
    id: "hello-bots"
  }
);
