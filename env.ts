import { assert } from "@std/assert/assert";

const PUBLIC_URL = Deno.env.get("PUBLIC_URL")!;
assert(PUBLIC_URL, "Has to have a public URL to work with webhook");

const BOT_TOKEN = Deno.env.get("BOT_TOKEN")!;
assert(BOT_TOKEN, "Can't work without bot token, hehe~");

export { PUBLIC_URL, BOT_TOKEN };
