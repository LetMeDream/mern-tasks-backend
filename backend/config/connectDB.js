const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected: ' + connection.connection.host)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB


/* First method to connect to MongoDB */
/* const startServer = async () =>{
    await connectDB();
    app.listen(PORT, ()=>{
        console.log('Server running on port ' + PORT)
    })
}
// Function created just in order to AWAIT for the MongoDB connection to happen first, before app.listen.
startServer() */

