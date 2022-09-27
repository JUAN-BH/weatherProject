const fs = require("fs");
fs.writeFileSync("./.env", `API=${process.env.WEATHER_API}\n`);
fs.writeFileSync("./.env", `API=${process.env.LOCATION_API}\n`);
