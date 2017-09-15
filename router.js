var express=require("express")
var router=express.Router()

router.get('/first',function(req,res,next){
	console.log("got the first")
})

module.exports=router