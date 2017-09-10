Template.addProject.helpers({
  // Getting all the users of the application
  users: function() {
    return Meteor.users.find();
  }
});


Template.addProject.events({
  "submit .add-project": function(event) {
    event.preventDefault();

    // getting the values from the form
    var name = $('#projectName').val();
    var strategicResource = $('#strategicResource').val(); // Returns an array of string names in strategic
    var technicalResource = $('#technicalResource').val(); // Returns an array of string names in technical

    // creating variables to hold data
    var i; // for iteration
    var resourcesArr = []; // for saving all objects into Array

    // Looping... To add Strategic Resource to resourcesArr array
    for (i in strategicResource){
      var resourceObj = {};
      resourceObj.name = strategicResource[i];
      resourceObj.type = 'Strategic';
      resourcesArr.push(resourceObj);
    }
    // Looping... To add Technical Resource to resourcesArr array
    for (i in technicalResource){
      var resourceObj = {};
      resourceObj.name = technicalResource[i];
      resourceObj.type = 'Technical';
      resourcesArr.push(resourceObj);
    }

    // Insering data into Projects, if no errors, routes to home, else an error will prompt the user.
    Meteor.call('projects.insert', name, resourcesArr);

    // to prevent the default behavior
    return false;
  }
});
