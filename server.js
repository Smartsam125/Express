const express = require('express')
const  app= express()
const handlebars= require('express3-handlebars').create({defaultLayout:'main'})
app.engine('handlebars',handlebars.engine)
app.set('view engine','handlebars')

app.use(express.static(__dirname +'/public'))
app.set('port',process.env.PORT || 1000)
const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
   ];
app.get('/',(req,res)=>{
    //res.type('text/plain')
    //res.send('hello smartsam')
    res.render('home')
})
app.get('/about',(req,res)=>{ 
    //res.type('text/plain')
    //res.send('well well well')
    const randomFortune=fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about',{fortune:randomFortune})
})
app.use((req,res)=>{
    
   // res.type('text/plain')
    res.status(404)
   // res.send('cant get info')
   res.render('404')
})
app.use((error,req,res,next)=>{
    console.error(error.stack)
    //res.type('text/plain')
    res.status(500)
   // res.send('internal server error')
   res.render('500')

})
app.listen(app.get('port'),()=>{
console.log('application started on port 5000') })