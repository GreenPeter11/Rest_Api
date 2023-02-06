import joi from 'joi'

const UserSchema=joi.object({
    name:joi.string().min(2).max(16).required(),
    email:joi.string().email().required(),
    password:joi.string().min(4).max(16).required()
   
})

export default UserSchema;