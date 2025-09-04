const express = require("express");
import Log from { './auth/LogMiddleWare' }

const express = require("express");

const app = express();
app.use(Log)

console.log("Done the process");

