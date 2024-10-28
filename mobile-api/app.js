const express = require('express');
const productRouter = require('./src/routes/product.route');
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require('./db');

(async () => {
   try {
     await sequelize.authenticate();
     console.log('Database connection established.');
     await sequelize.sync();  // Syncs all models
     console.log('All models synced successfully.');
   } catch (error) {
     console.error('Failed to connect:', error);
   }
 })();

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.use('/products', productRouter);

app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });