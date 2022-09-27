const fs = require("fs");
fs.writeFileSync("../.env", `WEATHER_API=${process.env.WEATHER_API}\n`);
fs.writeFileSync("../.env", `LOCATION_API=${process.env.LOCATION_API}\n`);
