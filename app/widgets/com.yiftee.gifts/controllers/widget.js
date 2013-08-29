var api_token = "1a461040ef067dea7f40fd8ef3b2663c4"; //for test
var sender_name = "";
var recipient_name = "";
var recipient_email = "";
var recipient_phone = "";
var sender_id_hash = ""; 
var message = "";
var return_url = "";
var host="https://yiftee.com/api/v1/gifts/send.html?";


function generateUrl(){

	var url = host + "api_token=" + api_token;
	if(sender_name != ""){
		url = url + "&sender_name=" + sender_name;
	}
	if(recipient_name != ""){
		url = url + "&recipient_name=" + recipient_name;
	}
	if(recipient_email != ""){
		url = url + "&recipient_email=" + recipient_email;
	}
	if(recipient_phone != ""){
		url = url + "&recipient_phone=" + recipient_phone;
	}
	if(sender_id_hash != ""){
		url = url + "&sender_id_hash=" + sender_id_hash;
	}
	if(message != ""){
		url = url + "&message=" + message;
	}
	if(return_url != ""){
		url = url + "&return_url=" + return_url;
	}


	$.giftsWebView.url = url;
}

function setApiToken(token){
	api_token = token;
}

function setSenderName(name){
	sender_name = name;

}

function setRecipientName(name){
	recipient_name = name;
}

function setRecipientEmail(email){
	recipient_email = email;
}

function setRecipientPhone(phone){
	recipient_phone = phone;
}

function setSenderIdHash(hash){
	sender_id_hash = hash;
}

function setMessage(msg){
	message = msg;
}

function setReturnUrl(url){
	return_url = url;
}



exports.setSenderName=setSenderName;
exports.setRecipientName=setRecipientName;
exports.setRecipientEmail=setRecipientEmail;
exports.setRecipientPhone=setRecipientPhone;
exports.setSenderIdHash=setSenderIdHash;
exports.setMessage=setMessage;
exports.setReturnUrl=setReturnUrl;
exports.open=generateUrl;
exports.setApiToken=setApiToken;




