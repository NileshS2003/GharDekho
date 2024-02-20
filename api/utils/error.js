/* middleware for custom errors */


export const errorhandler=(message,statusCode)=>{
    const error=new Error();
    error.statusCode=statusCode
    error.message=message
    return error
}