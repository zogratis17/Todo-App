const express = require('express'); //calling in express
const mongoose = require('mongoose')
const app = express(); //assigning express function as app
const cors = require('cors');

//middleware - for decoding json data

app.use(express.json());
app.use(cors()); //middleware for cors policy





const port = 8000; //port number for running the application

// app.get('/', (req, res) => { // '/' represents the url , the localhost one
//     res.send('Hello World!'); // this is what gets printed when we open the url
// });

// in memory storage for todo items
//let todos = [];

//connecting mongoDB

mongoose.connect('mongodb://localhost:27017/todos')
.then(() => {
    console.log("DB connected sucessfully nanba")
})
.catch((err) => {
    console.log(err)
})

//schema

const todoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: String
})

//model

const todoModel = mongoose.model('Todo', todoSchema); //always use singular name for collection name




//Create a new todo item 

app.post('/todos', async (req, res) => {  //post route means new data is being added  //async denotes that this is an asynchronous func
    const { title, description } = req.body;
    // const newTodo = {
    //     id: todos.length + 1,
    //     title,
    //     description
    // };
    // todos.push(newTodo); //adding the newTodo to todos (the in memory created above)
    // console.log(todos); 
    try { //since it is an asynchronous function, better to use try and catch
        const newTodo = new todoModel({ title, description });
        await newTodo.save(); 
        res.status(201).json(newTodo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }

    //setting a status code 201 , 201 means the request was successfully fulfilled and resulted in one or possibly multiple new resources being created.

})


//Get all todo items

app.get('/todos', async (req, res) => {//get route means you are retrieving existing data //async since it is a Promise Func
    try {
        const todos = await todoModel.find();
        res.json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

//update item

app.put('/todos/:id', async (req, res) => { //put route means updating existing data // : means it denotes a parameter , here it is id
    try {
        const { title, description } = req.body;
        const id = req.params.id;
        const updatedTodo = await todoModel.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }, //sends the new data as output
        )
    
        if (!updatedTodo) {
            return res.status(404).json({ message : "Todo Not found"})
        }
    
        res.json(updatedTodo)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
   


})

//dlt

app.delete('/todos/:id', async (req, res) => { //delete route means deleting existing data
    try {
        const id = req.params.id; //get id from parameter
        await todoModel.findByIdAndDelete(id)
        res.status(204).end(); 

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
})

//start server
app.listen(port, () => { //server listening
    console.log(`Server listening at http://localhost:${port}`); //confirmation whether the server is listening or not
});