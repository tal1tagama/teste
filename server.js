import cors from '@fastify/cors'
import { app }from './app.js'

async function server(){
    app.register(cors,{
        origin:true,
        method: ["GET", "POST", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type"]
    })

    app.listen ({
        host:'0.0.0.0',
        port: 3333
    }).then(()=>{
        console.log('HTTP is running on PORT 3333')
    }
)
}

server();