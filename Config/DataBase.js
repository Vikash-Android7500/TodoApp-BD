const mongoose = require("mongoose");

require("dotenv").config();
const dbConnact = () => {
     mongoose
       .connect(process.env.DATABASE_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       })
       .then(() => console.log("DB is Connaction is successfully"))
       .catch((e) => {
         console.log("Issue in DB Connaction");
         console.log(e.message);
         process.exit(1);
       }); 
}
module.exports = dbConnact; 