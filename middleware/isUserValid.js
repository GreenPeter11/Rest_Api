import { request } from "express"

const isValid = (schema) => (req,res,next) =>{
    console.log(request.body);
    const{error}=schema.validate(req.body)
    if(error){
        console.log(error)
      return res.status(404).send({message: error.details[0].message})}
    else{
        next();
    }
    
    }

export default isValid;