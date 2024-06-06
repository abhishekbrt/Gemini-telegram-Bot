const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.TELEGRAM_BOT_API_KEY);
const run = require('./geminiPro');

// bot.hears("/start",(ctx) =>{
//     console.log(ctx.message);
    
//     ctx.reply("Please type your city name ");
// });

bot.on('text', async (ctx) => {
    // console.log(ctx.message.text);
    try {
        const text = await run(ctx.message.text);
        ctx.reply(text);
    } catch (err) {
        console.error('Failed to run:', err);
    }
    // ctx.reply(`You typed: ${ctx.message.text}`);
});

bot.launch()
    .then(() => {
        console.log('Bot is connected');
    })
    .catch((err) => {
        console.error('Failed to connect bot:', err);
    });

    