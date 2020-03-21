const express = require('express')

//store express application
const app = express()
const hbs = require('hbs')
 
//define path for express config
const path = require('path')
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//look up in views directory: default = view folder --> iff change name then have to give path
//Set up handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//set up static directory to serve: like header or footer'
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title: 'Weather app',
        name: 'Praewpun Cheevamongkol'
    }) //don't need to put .hbs
})
//Becuase app.use(express....) ใช้แทนหน้านี้ไปแล้ว เลยไม่ต้องมี
/*app.get('', (req, res) => {
    //res.send('Hello express!') //post on web
    res.send('<h1>Weather<h1>') //send HTML
})
*/

//assume we own :app.com //root route
//app.com/help
//app.com/about

app.get('/help',(req,res) =>{
    //send back JSON
    res.render('help', {
        title: 'Help',
        name: 'Igloo'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'Claim',
        name: 'Igloo\'s team'
    })
})

app.get('/weather', (req,res) => {
    res.send({
        location: 'Bangkok',
        forcast: 'Hot'
    })
})

app.get('/help/*',(req,res) =>{
    //send back JSON
    res.send('Help article not found')
})

app.get('*', (req ,res) => {
    res.send('404 page not found')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})