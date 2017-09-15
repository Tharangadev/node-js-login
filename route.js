var express=require("express")
var route=express.Route()
var login=require("./login")


exports.base=function(req,res,next)
{
	
	
}

exports.login=function(req,res,next)
{
	var email=req.query.email;
	var password=req.query.password;
	
	if(email!=="undefined" && password!=="undefined")
	{
		login.login({
			"eamil":req.query.email,
			"password":req.query.password
		})
	}
	
}
