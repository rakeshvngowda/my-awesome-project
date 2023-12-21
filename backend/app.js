import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();


const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=> {
    res.json([
        {
          "id":"1",
          "title":"Book Review: The Name of the Wind"
        },
        {
          "id":"2",
          "title":"Game Review: Pokemon Brillian Diamond"
        },
        {
          "id":"3",
          "title":"Show Review: Alice in Borderland"
        }
      ]);
})


const PORT = process.env.PORT || 4000;

app.listen(PORT,()=> {
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT} Port`);
})

