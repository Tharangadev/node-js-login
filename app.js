var express=require("express")
var app=express()
var path=require("path")

var config=require("./config")
var routes=require("./route")

app.use(express.static(path.join(__dirname,"public")))

app.get("/login",routes.login)

app.set("port",process.env.PORT || 3000)

app.listen(app.get("port"),function(){
	console.log("all are here")
})