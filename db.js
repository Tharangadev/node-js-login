var collection=[
	{
		"first_name":"james may",
		"email":"may@bbc.com",
		"password":"carrot123"
	},
	{
		"first_name":"Richerd",
		"email":"richerd@bbc.com",
		"password":"hamster123"
	},
	{
		"first_name":"jeromy clearkson",
		"email":"jeromy@bbc.com",
		"password":"password123"
	},
	{
		"first_name":"Judy kidd",
		"email":"judy@gmail.com",
		"password":"judy123"
	},
	{
		"first_name":"JK",
		"email":"=JK@jamera.com",
		"password":"fiatpanda"
	},
]
var config=require('./config')
var connector=
{
	mysql:require("mysql"),
	connection:this.mysql.connect({
		  host     : config.mysql.host,
		  user     : config.mysql.user,
		  password : config.mysql.password,
		  database : config.mysql.database
	})
}

exports.isitin=function(details)
{
	if(typeof(details)=="object")
	{
		var email=details.eamil
		var password=details.password
                connector=new connector()
		console.log(details)
		
		if(email!=undefined && password!=undefined)
		{
						
		}
		
	}
	else 
	{
		console.log("please enter details as a obj")
	}
}