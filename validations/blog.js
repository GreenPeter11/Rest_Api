import joi from '@hapi/joi'

const BlogSchema=joi.object({
    title:joi.string().min(4).required(),
    content:joi.string().min(5).required(),
    image:joi.string().required()
})

export default BlogSchema;