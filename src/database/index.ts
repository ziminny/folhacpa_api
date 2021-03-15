import { createConnection } from "typeorm";

createConnection() .then( res => {
  console.log("connected postgress database");
  
}).catch( err => console.log(err)
)