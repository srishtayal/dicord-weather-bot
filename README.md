# Discord Weather Bot 🌦️

A simple Discord bot that fetches current weather information for any city using the [WeatherAPI](https://www.weatherapi.com/) and responds to user commands.

## Features
- Responds to `!weather <city>` with the current weather of the specified city.
- Provides details such as temperature, weather condition, humidity, and wind speed.
- Slash command support (`/ping`) for testing the bot's responsiveness.

---

## Prerequisites
1. [Node.js](https://nodejs.org/) (v16.6.0 or later for Discord.js compatibility).
2. A [WeatherAPI](https://www.weatherapi.com/) API key.
3. A Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications).

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-bot.git
   cd weather-bot
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add:
   ```env
   WEATHER_API_KEY=your_weather_api_key
   DISCORD_TOKEN=your_discord_bot_token
   APP_ID=your_discord_application_id
   ```

4. **Register Slash Commands**:
   Run the following command to register commands with Discord:
   ```bash
   npm start
   ```

---

## Usage

1. **Start the Bot**:
   ```bash
   npm start
   ```

2. **Commands**:
   - `!weather <city>`: Fetches the current weather for the specified city.
   - `/ping`: Replies with "Pong!" to test the bot.

---

## Example Output

### Command:
```plaintext
!weather London
```

### Bot Reply:
```plaintext
**Weather for London, United Kingdom:**
- 🌡️ Temperature: 18°C
- 🌧️ Condition: Partly cloudy
- 💧 Humidity: 78%
- 🌬️ Wind: 15 kph
```

---

## Troubleshooting

### Common Issues:
- **`Invalid Form Body` Error**: Ensure `APP_ID` in `.env` matches your Discord application ID.
- **`ConnectTimeoutError`**: Check your internet connection or network settings. Try increasing the timeout in the REST client.
- **Bot Not Responding**: Ensure the bot is invited to your server and has the necessary permissions.

---

## Dependencies
- [Discord.js](https://discord.js.org/) - For Discord API interaction.
- [Axios](https://axios-http.com/) - For making HTTP requests to WeatherAPI.
- [Dotenv](https://github.com/motdotla/dotenv) - For managing environment variables.
