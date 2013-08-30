var args=arguments[0] || {};

$.contactname.text=args.name;
var name = args.name;
var contactemail=args.email;
var contactphone=args.phone;

$.contactrow.selectionStyle = Titanium.UI.iPhone.TableViewCellSelectionStyle.None;

function myCallback(){

  var w = Alloy.createController("gifts", {recipient_email:contactemail, recipient_name:name, recipient_phone:contactphone}).getView();
	w.open();
}