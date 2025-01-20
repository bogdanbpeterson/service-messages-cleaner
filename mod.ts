import { Application, Router } from "@oak/oak";
import { oakCors } from "cors";
import { bot, handleUpdates } from "./bot.ts";
import { PUBLIC_URL } from "./env.ts";

const router = new Router();

router.get("/", (context) => (context.response.body = "Hey!")).post(`/${bot.token}`, handleUpdates);

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log("run");
console.log(
  await (await fetch(`https://api.telegram.org/bot${bot.token}/setWebhook?url=${PUBLIC_URL}/${bot.token}`)).text(),
);
await app.listen({ port: 8000 });
