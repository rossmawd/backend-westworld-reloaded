const express = require("express");
const app = express();

process.env['PORT'] = 5000 //couldn't figure out how cmd line env setting works

//first arg is the path, second is the callback to execute on hitting that endpoint
app.get("/", (req, res) => {
   //bunch of properties available to analyse the nature of the request 
   res.send('hello world')
});


app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4])
})
//nodemon index.js 

//setting an env variable so that the port can be set externally
const port = process.env.PORT || 3000;
console.log(process.env)

app.listen(port, ()=> console.log(`listening on port ${port}`))

// app.get()
// app.post()
// app.put()
// app.delete()
//https://expressjs.com/en/4x/api.html#req
    // e.g. req.body gives the body of the request

//<pre>3</pre>
    //sends it back to the client as HTML