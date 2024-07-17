
const verifyAuth = (req,resp,next)=>{
    const api  = req.headers['x-my-private-key'];
    console.log(api);
    if(!api)
        return resp.status(403).json({message:"Unauthorized Request"})
    if(api!==process.env.ROUTE_PASSWORD)
        return resp.status(403).json({message:"Unauthorized Request"})
    next();
}