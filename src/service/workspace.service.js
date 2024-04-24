
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";



// Get all workspace

export const getAllWorkSpaceService = async()=>{
    const session =await getServerSession(authOption)
    console.log(session);
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces',
    { 
        headers:{
            authorization: `Bearer ${session?.user?.token}`
        },
        cache:"no-store",
        method:"GET",
        
    });
    const data = await res.json();
    return data;
    
}