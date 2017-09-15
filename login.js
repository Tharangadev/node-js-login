var dbase=require("./db")

exports.login=function(login_details){
	//dbase.isitin({"eamil":"yplanda","password":"superdrooper"})
	if(typeof(login_details)!="object")
	{
		print("send them as a object")
	}
	else
	{
		dbase.isitin(login_details)
	}
}
exports.logout=function(){
	
}
