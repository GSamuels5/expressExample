import  express  from "express";
import path from "path";
// create an express app
const app = express()
const router = express.Router()
// using router as middleware
app.use(router,
    express.static('./static'))
const port = +process.env.port || 4000
// Router 
router.get('^/$|/express',display, (req,res)=>{
res.status(200).sendFile(path.resolve('./static/html/index.html'))
//     msg: 'You\'re home'
// }) 
// res.json({
//     status: res.statusCode,
//     msg: 'You\'re home'
// })
})
router.get('/about', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'About page'
    })
})
router.all('*', (req, res)=>{
    res.json({
        status: 404,
        msg: '404 page'
    })
})
// Middleware
function display(req, res, next) {
    console.log("Hello there");
    next()
    
} 
app.listen(port)