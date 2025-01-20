import { Bot, webhookCallback } from "grammy";
import { BOT_TOKEN } from "./env.ts";

const bot = new Bot(BOT_TOKEN);

bot.command("start", (ctx) => ctx.reply("Welcome! Add me to a group so I can fulfill my purpose!"));

bot.on([":left_chat_member", ":new_chat_members"], async (ctx) => {
  try {
    await ctx.deleteMessage();
  } catch (err) {
    console.error("Failed to delete the message:", err);
  }
});

const handleUpdates = webhookCallback(bot, "oak");

export { bot, handleUpdates };
