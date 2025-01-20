import { assert } from "@std/assert/assert";

export const raise = (error: string): never => {
  throw new Error(error);
};

const PUBLIC_URL = Deno.env.get("PUBLIC_URL") ?? raise("");
assert(PUBLIC_URL, "Has to have a public URL to work with webhook");

const BOT_TOKEN = Deno.env.get("BOT_TOKEN")!;
assert(BOT_TOKEN, "Can't work without bot token, hehe~");

export { PUBLIC_URL, BOT_TOKEN };
