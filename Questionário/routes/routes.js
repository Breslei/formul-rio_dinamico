const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors")
app.use(cors())

users=[{
        nameReg:null, nascReg:null, emailReg:null
    }]

app.use(express.json())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



app.get('/usersStore',(request,response)=>{
        response.send(users)
})


app.post('/usersStore',(request,response)=>{
        const user = ({nameReg, nascReg, emailReg}=request.body)
        users.push(user)
        return response.json({user})
})



app.listen(3000);