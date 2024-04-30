import { NextResponse } from "next/server";
import { auth } from "./app/config/firebase";

export default function middleware(req: any) {
    console.log("middleware")
    // let user
    // auth.onAuthStateChanged((data) => {
    //     user = data
    //     console.log('user: ', user);
    // })
    // console.log('req.url: ', req.url);
    // return NextResponse.redirect('http://localhost:3000/')

}