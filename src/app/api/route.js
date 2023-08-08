import { NextResponse } from "next/server"


export const GET = async (request) => {

    try{

        return new NextResponse("Welcome to API", {status: 200});
    } catch (er) {
        return new NextResponse("Database Error", {status: 500});

    }

}