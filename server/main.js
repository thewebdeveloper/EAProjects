import { Meteor } from 'meteor/meteor';

Meteor.startup(function(){
  process.env.MAIL_URL = "smtp://postmaster@sandbox4953101a21b047a7b12d08295423317b.mailgun.org:93e5bafb95bedd81d86c0f4f0bc32bc2@smtp.mailgun.org:587";
})
