// ESM syntax is supported.
export {};
import * as bot from "bbot";
import { asimovDirective } from "./rules/directives";
import path from "path";

asimovDirective();

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
