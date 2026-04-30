import app from "./src/app.js";
import { envConfig } from "./src/config/conflig.js";

function startServer (){

app.listen(envConfig.port|| 3000, () => {
    console.log(`Server is running on port ${envConfig.port}`);
}); 
}

startServer();