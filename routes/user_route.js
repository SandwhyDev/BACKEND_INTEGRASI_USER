import express from "express"
import { User } from "../model/model"
import { form } from "../services/form"
import { hash_password } from "../services/hash_password"

export const user = express.Router()

user.post("/user_register", form.none(),async(req,res)=>{
    try {
        const data = await req.body
        const result = await User.create({
            email : data.email,
            password : hash_password(data.password)
        })

        res.json({
            success : true,
            msg : "berhasil register",
            query : result
        })
    } catch (error) {
        res.json({
            success : false,
            error : error.message
        })
    }
})

user.get("/user_read_all", async(req,res)=>{
    try {
        const result = await User.findAll()
        res.json({
            success : true,
            query : result
        })
    } catch (error) {
        res.json({
            success : false,
            error : error.message
        })
    }
})