const express= require('express')
const app =express();
app.set('port',process.env.PORT || 9000)
app.use((re,res)=>{
    res.type('text/plain')
    res.status(404)
    res.end('not found')
})
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.type('text/plain')
    res.status(500)
    res.end('500 internal server erro')

})
app.listen(app.get('port'))