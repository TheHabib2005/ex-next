import {NextResponse} from "next/server"
export const POST = async () =>{
    try {
        return NextResponse.json([{
            id:1,
            name:"habib"
        },{
            id:2,
            name:"habib2"
        },{
            id:3,
            name:"habib3"
        }])
    } catch (error) {
        
    }
}