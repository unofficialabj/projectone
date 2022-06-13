import LoginIn from "../model/admin"

export const admin= async(req,res)=>{
   const user = await LoginIn.find({

   }).exec()

   res.json(user)
}

export const singleUser= async(req,res)=>{
    const {id} = req.body
    const findSingleUser= await LoginIn.findById(
        id
    )//.select('-password')
    res.json(findSingleUser)
}

export const deleteUser= async(req,res)=>{
    console.log(req.query)
    const {user}=req.query
    const deletedUser = await LoginIn.findByIdAndDelete(user).exec()
    res.status(200).send("User deleted successfully")
}