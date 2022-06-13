import {admin, deleteUser} from '../controller/admin'
import { requireSignIn } from '../middlewares';
import { singleUser } from '../controller/admin';

const express = require("express");
const router = express.Router(); 

router.get("/admin",requireSignIn, admin)

router.post("/singleuser",requireSignIn, singleUser)

router.delete("/deleteUser", deleteUser)


module.exports = router;