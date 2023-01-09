const fastify = require('fastify')({logger:true})

const PORT = 3000

fastify.register(require('./routes/list'))

const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/toDoApp',(err)=> {
    if(err){
        console.log(err);
    }else{
        console.log("successfully conected with db...");
    }
})

// const database = module.exports = ()=> {
//     const connectionParams = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
//     try {
//         mongoose.connect('mongodb+srv://ahad:k0hvHQbk6MCWyn6F@cluster0.wgvm1id.mongodb.net/toDo?retryWrites=true&w=majority',
//         connectionParams
//         )

//         console.log('db connected succesfully');
//     } catch (error) {
//         console.log(error);
//     }
// }


database()

const start = async()=> {
    try {
        fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()   