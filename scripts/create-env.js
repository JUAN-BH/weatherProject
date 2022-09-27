const fs = require("fs");
fs.writeFileSync("./.env", `WEATHERAPI=${process.env.WEATHERAPI}\n`);
fs.writeFileSync("./.env", `LOCATIONAPI=${process.env.LOCATIONAPI}\n`);
