var helpers=require('helpers');

if (OS_IOS){
	if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED){
	    var myContacts=helpers.getContacts();
	    loadContacts();
	} else if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN){
	    Ti.Contacts.requestAuthorization(function(e){
	        if (e.success) {
	            var myContacts=helpers.getContacts();
	            loadContacts();
	        } else {
	            myContacts=[];
	        }
	    });
	} else {
	    myContacts=[];
	}
}else{
	var myContacts=helpers.getContacts();	
	loadContacts();
}

function loadContacts(){
	if (myContacts.length>0){
		data=[];
		myContacts.forEach(function(item){

			try{
				var email=item.email.home[0];
			}catch(e){
				var email='';
			}
			try{
				var phone=item.phone.mobile[0];
			}catch(e){
				var phone='';
			}

			var payload={
				name:item.fullName,
				email: email,
				phone: phone
			}
			// note: email is hardcoded to home email.  In real life we need to analyze the contents
			// of this field and use the proper one...grabbing the email needs some work
			// 
			
			var row=Alloy.createController('contact_row',payload).getView();
			data.push(row);
		})
		$.contacts.data=data;
	}else{
		alert('No contacts or access denied by user');
	}
}

function clickTableHandler(e){
	if (e.source.id === 'rowbutton' || e.source.id==='rowbuttoncaption'){
		alert('Send email to : ' + e.row.contactemail);	
	}
}

$.index.open();


