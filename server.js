import cors from '@fastify/cors'

async function server(){
    App.register(cors,{
        origin:true,
        method: ["GET", "POST", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
}