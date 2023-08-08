import mongoose from "mongoose";

const connectionUrl = `mongodb+srv://mohammadmanzoor8972:Ninja321@cluster0.qzw30bl.mongodb.net?retryWrites=true&w=majority`
const connect = async ()=>{

    try{
        await mongoose.connect(connectionUrl);
        console.log("Connect Done")
    } catch (error) {
        console.log("Connect Error", error)

        throw new Error("Connection failed!")
    }
}


export default connect;