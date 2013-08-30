var args=arguments[0] || {};

$.contactname.text=args.name;
var name = args.name;
$.contactrow.contactemail=args.email;
$.contactrow.contactphone=args.phone;


$.contactrow.selectionStyle = Titanium.UI.iPhone.TableViewCellSelectionStyle.None;

function myCallback(){

  var w = Alloy.createController("gifts", {recipient_email:$.contactrow.contactemail, recipient_name:name, recipient_phone:$.contactrow.contactphone}).getView();
	w.open();
}