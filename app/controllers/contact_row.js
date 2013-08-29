var args=arguments[0] || {};

$.contactname.text=args.name;
var name = args.name;
$.contactrow.contactemail=args.email;
$.contactrow.contactphone=args.phone;

$.contactrow.selectionStyle = Titanium.UI.iPhone.TableViewCellSelectionStyle.None;

function myCallback(){

  var w = Alloy.createController("gifts", {sender_name:"Aldo", recipient_name:name}).getView();
	w.open();
}