var args=arguments[0] || {};


$.gifts_view.setSenderName(args.sender_name);
$.gifts_view.setRecipientName(args.recipient_name);
$.gifts_view.open();

function closeWindow(){
	$.giftsWindow.close();
}
