const getAllUsers = (req,resp)=>{
    resp.send('hello we will fetch the all users data ');
}
const getUserRegister = (req,resp)=>{
    console.log(req.body);
    resp.send('heyy we are checking the data');
}

const getUserByUsername = (req,resp)=>{
    resp.send('we will get the user by username');
}
module.exports={getAllUsers,getUserByUsername,getUserRegister};