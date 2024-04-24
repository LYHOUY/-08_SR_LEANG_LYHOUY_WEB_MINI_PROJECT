import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const getTaskService = async()=>{
    const session =await getServerSession(authOption)
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks?workspaceId=512
`,
    { 
        headers:{
            authorization: `Bearer ${session?.user?.token}`
        },
        cache:"no-store",
        method:"GET",
        
    });
    return res.json();
    
}