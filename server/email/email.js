// Setting up the mailing server method
Meteor.methods({
  sendEmail(to, from, subject, text) {

    // unblocking the other methods to be called from the client.
    this.unblock();

    // Sends the email
    Email.send({ to, from, subject, text });
  }
});

// smtp://user:pass@yourservice.com:587
// smtp://abdullah.webdeveloper@gmail.com:Amira@193@smtp.gmail.com:587
