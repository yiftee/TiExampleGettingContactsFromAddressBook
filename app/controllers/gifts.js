var args=arguments[0] || {};

$.gifts.setRecipientName(args.recipient_name);
$.gifts.setRecipientEmail(args.recipient_email);
$.gifts.setRecipientPhone(args.recipient_phone);
$.gifts.open();

function closeWindow(){
	$.giftsWindow.close();
}
