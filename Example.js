const express = require("express");
const app = express();
const router = express.Router();

const PORT = 3000;
router.get('/user', function(req,res,next) { // router method
    console.log("Get request called");
    res.end();
});

router.post('/user', function(req,res,next){
    console.log("POST request called");
    res.send();
});

router.delete('/user', function(req,res,next) {
    console.log("delete the request ");
    res.send();
});

app.use(router);
app.listen(PORT,  function(err){
    if(err) {
      console.log("erroe occured");
    }else{
        console.log("server is running...");
    }
});