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
	the_connection:null,
	connection:function()
	{
		this.the_connection=connector.mysql.createConnection({
			  host     :config.mysql.host,
			  user     : config.mysql.user,
			  password : config.mysql.password,
			  database : config.mysql.database
		});
		this.the_connection.connect()
		

	},
	sql:function(sql,callback)
	{
		if(this.the_connection!=null)
		{
			
			connector.the_connection.query(sql,function(error, results, fields){
                            console.log(results.length)
			 	for(var i=0;i<=results.length;i++)
                                {
                                    console.log(results[i].id)
                                }
			 });
			
			
		}
		else 
		{
			return "not connected" 
		}
	}
}

exports.isitin=function(details)
{
	if(typeof(details)=="object")
	{
		var email=details.eamil
		var password=details.password

		connector.connection()
		try {
			 results=connector.sql("SELECT * from `users`")
			 console.log(results)
			 
		}
		catch (e) 
		{
			console.log(e)
		}

		
		if(email!=undefined && password!=undefined)
		{
						
		}
		
	}
	else 
	{
		console.log("please enter details as a obj")
	}
}