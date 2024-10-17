import { Express } from "express"
export default class Util{
    static async startServer(PORT:number, app:Express):Promise< undefined | {message:string}>{
        try{
            app.listen(PORT, ()=>console.log(`Server running on the port ${PORT}`))
        }catch(error:unknown){
            return ({message: "Error startServer"})
        }
    }
};