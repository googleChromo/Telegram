import TeleBot from "telebot";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

// Start command handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome to here");
});

// Command list handler
bot.onText(/\/commands/, (msg) => {
  const chatId = msg.chat.id;
  const commandList = [
    "/encryptor - Encrypt text",
    "/decryptor - Decrypt text",
    "/repeator - Repeat text",
    "/email - Send email",
    "/developer - Contact the developer",
  ];
  bot.sendMessage(chatId, "Command List:\n\n" + commandList.join("\n"));
});

bot.on("text", (msg) => msg.reply.text(msg.text));

export default bot;
