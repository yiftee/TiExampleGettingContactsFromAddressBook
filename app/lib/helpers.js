exports.getContacts=function(){
	// this is a rework of the example found on 
	// http://docs.appcelerator.com/titanium/2.1/#!/api/Titanium.Contacts-method-getAllPeople
	var singleValue = [
	  'recordId', 'firstName', 'middleName', 'lastName', 'fullName', 'prefix', 'suffix', 
	  'nickname', 'firstPhonetic', 'middlePhonetic', 'lastPhonetic', 'organization', 
	  'jobTitle', 'department', 'note', 'birthday', 'created', 'modified', 'kind'
	];

	var multiValue = [
	  'email', 'address', 'phone', 'instantMessage', 'relatedNames', 'date', 'url'
	];

	var people = Ti.Contacts.getAllPeople();
	var myContacts=[];

	for (var i=0, ilen=people.length; i<ilen; i++){
	  var person = people[i];
	  var contact={};
	  for (var j=0, jlen=singleValue.length; j<jlen; j++){
	    var propName=singleValue[j];
	    contact[propName]=person[singleValue[j]];
	  }
	  
	  for (var j=0, jlen=multiValue.length; j<jlen; j++){
	    var propName=multiValue[j];
	    contact[propName]=person[multiValue[j]];
	  }
	  myContacts.push(contact);
	}
	return myContacts;
}