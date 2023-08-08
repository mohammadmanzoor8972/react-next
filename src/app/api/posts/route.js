//import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server"


export const GET = async (request) => {

    try{
        await connect();

       // const posts = await Post.find();
        console.log("posts****", "posts")
        return new NextResponse("posts", {status: 200});
    } catch (er) {
        return new NextResponse(er, {status: 500});

    }

}