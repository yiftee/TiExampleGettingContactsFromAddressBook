# Gifts Widget
This widget for the [Appcelerator](http://www.appcelerator.com) Titanium Alloy MVC Framework provides the ability to add "Send a gift" functionality, similar to [Facebook Gifts](http://www.facebook.com/gifts).  The gifts functionality is integrated from the [Yiftee Giftup API](http://yiftee.com/developers), free to use and is another way to monetize mobile apps.  Yiftee shares revenue with the developer from any gifts that are purchased.  
//IDEAS

![demo](https://github.com/yiftee/com.yiftee.gifts/raw/master/docs/gift_demo.png)

##Quick Start

How do I add gifts to my app?

* [Download]() the latest release of the widget.
* Copy `com.yiftee.gifts` to your app's `app/widgets` folder.
* Add the widget to your app's configuration file `app/confi.json`:

```javascript
"dependencies": {
	"com.yiftee.gifts": "1.0"
}
```

* Require the gifts widget in a view:
```xml
<Widget src="com.yiftee.gifts" id="gifts"/>`
```
* Setup parameters (these could be passed in via arguments to the view, or from the database):
```javascript
$.gifts.setSenderName("Bob";
$.gifts.setRecipientName("Vero");
```

* Open the send a gift view
```javascript
$.gifts.open();
``` 

## Getting your API key
Go to the [Yiftee Developers](http://yiftee.com/developers) site, and register as a new developer.  In the [App Settings](http://yiftee.com/developers/apps), you'll find your API Token.  The API Token is necessary for two reasons: to get attributed/paid for any gifts that are purchased in your app and to customize the UX experience of your users (which merchants are displayed, etc).

## Parameters
Most of these parameters are used to prefill information in the gifting process to help the gift giver enter the fewest info possible. The Gifts Widget exposes the following methods:

| Method | Description |
| ------ | ----------- |
| setApiToken(token) | Sets the api token to pass to the Giftup API.  If this is not set, it will use a test token and no purchased gifts will be attributed to you. Get your [Gifts API key](http://yiftee.com/developers) |
| open() | Opens the gift view (this method should be called after setting all the parameters) |
| setSenderName(name) | Prefills the sender name |
| setRecipientName(name) | Prefills the recipient name |
| setRecipientEmail(email) | Prefills the recipient email | 
| setRecipientPhone(phone) | Prefills the recipient phone |
| setMessage(message) | Prefills the message |
| setSenderIdHash(unique_hash) | A unique user identifier to enable Saving Credit Card Option and more in-depth reporting for the Developer |
| setReturnUrl(return_url) | Apps that support deep linking can supply a url to navigate the user back to the app upon completion of gift purchase |

For more info of the available parameters in the Gifts API, see [Documentation](http://yiftee.com/developers/documentation).


