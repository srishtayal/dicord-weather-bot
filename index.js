import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const APP_ID = process.env.APP_ID; 

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Handle Weather Command
client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!weather')) {
        const city = message.content.split(' ')[1];
        if (!city) {
            message.reply('Please provide a city name.');
            return;
        }

        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
                params: {
                    key: WEATHER_API_KEY,
                    q: city,
                },
            });

            const weatherData = response.data;
            const weatherMessage = `
                **Weather for ${weatherData.location.name}, ${weatherData.location.country}:**
                - 🌡️ Temperature: ${weatherData.current.temp_c}°C
                - 🌧️ Condition: ${weatherData.current.condition.text}
                - 💧 Humidity: ${weatherData.current.humidity}%
                - 🌬️ Wind: ${weatherData.current.wind_kph} kph
            `;
            message.reply(weatherMessage);
        } catch (error) {
            message.reply('Could not fetch weather data. Please try again or check the city name.');
        }
    }
});

// Handle Slash Commands
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

// Register Slash Commands
const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(APP_ID), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

// Login Bot
client.login(DISCORD_TOKEN);
