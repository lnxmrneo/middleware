import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request:NextRequest){
    //parse nextUrl Object
    const {pathname, searchParams} = request.nextUrl
   

    console.log({pathname, sort: searchParams.get('sort')});
    return NextResponse.next()

    //redirecting
    //return NextResponse.redirect(new URL('/team', request.url))


    // reading request cookie
    // const allcookies  = request.cookies.getAll();
    // console.log(allcookies)

    // setting response coookie
    // const response = NextResponse.next();
    // response.cookies.set({
    //     name: "next",
    //     value: "middleware",
    //     path: '/'
    // })

    // return response

    // responding with json
    //return NextResponse.json({ message: "Hello from middleware" })
}

export const config = {
    matcher: '/about'
}