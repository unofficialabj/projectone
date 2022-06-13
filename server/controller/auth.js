import LoginIn from '../model/admin'
import { hashPassword, comparePassword } from '../utils/auth';
import Jwt  from 'jsonwebtoken';

export const signup=async(req,res)=>{
    console.log(req.body)
    const {name, username, password, email}=req.body;
    
    if(!name) return res.status(400).send("Name is empty")
    if(!username) return res.status(400).send("Username is empty")
    if(!password) return res.status(400).send("Password is empty")
    if(!email) return res.status(400).send("Email is empty")
     
    let emailExist = await LoginIn.findOne({
        email

    }).exec()

    if(emailExist) return res.status(400).send("User already exist")
    
    const hashedPassword = await hashPassword(password)

    const userData=new LoginIn({
        name, 
        username, 
        password:hashedPassword, 
        email
    })
    await userData.save()
    return res.json({Message:"Sign in successful"})
}

export const login=async(req,res)=>{
    const {email, password}=req.body;
    //email xaina vane user not found vannu paro............
    const user = await LoginIn.findOne({
        email
    }).exec()
    console.log(user)
     
    // const matched = await comparePassword(password,user.password)
    // //console.log(matched) //message aaaunu paro
    // if(matched) return res.json({Message:"Login Successful"})

       if(!user) return res.status(400).send("User not found")

            const matched = await comparePassword(password,user.password)
            //console.log(matched) //message aaaunu paro
                
            if(!matched) return res.status(400).send("Wrong Password")

            //     // return res.status(200).send("Login Successfully")
            //     Const 
            // }
            // else{

            //     return res.status(400).send("Wrong Password")
                
            const token = Jwt.sign({
                userId : user._id,
                userName : user.username,

            }, process.env.LOGIN_SECRET,{
                expiresIn: "7d"
            })
            // console.log(token)       displays token

            user.password=undefined;
            res.cookie('token',token,{
                //secure : true          jaba samma https rq bata aaudaina taba samma token save hudaina cookie maa in production
                httpOnly : true,
                
            })
            res.json(user)
}

export const logout=async(req,res)=>{
    res.clearCookie('token')
    return res.json({Message : " Bye Bye"})
}