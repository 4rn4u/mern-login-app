import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const {email, password, username} = req.body;
    try{
        const newUser = new User({
            username,
            email,
            password,
        })
        console.log(newUser)
    
        const userSaved = await newUser.save()
        res.json(userSaved)

    } catch (error) {
        console.log(error);
    }
    
}

export const login = (req, res) => res.send("login");