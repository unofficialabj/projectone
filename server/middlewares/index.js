import  Jwt  from "jsonwebtoken"

export const requireSignIn=(req, res, next)=>{
    const myToken= req.cookies.token
    // console.log(req.cookies.token)
    // next()
    if(!myToken) return res.status(401).send('Unauthorized')
    Jwt.verify(myToken, process.env.LOGIN_SECRET, 
        async function(err, success){
            if(err) return res.status(401).send('User Expires')
            const {userId} = Jwt.decode(myToken)
            console.log(userId)
    } )
    next()
    
}
