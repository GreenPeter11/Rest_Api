import joi from '@hapi/joi'

const QuerySchema=joi.object({
    name:joi.string().min(2).max(16).required(),
    message:joi.string().min(5).required()
  
})

export default QuerySchema;