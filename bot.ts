import { Bot, webhookCallback } from "grammy";
import { BOT_TOKEN } from "./env.ts";

const bot = new Bot(BOT_TOKEN);

bot.command("start", (ctx) => ctx.reply("Welcome! Add me to a group so I can fulfill my purpose!"));

const handleUpdates = webhookCallback(bot, "oak");

export { bot, handleUpdates };
