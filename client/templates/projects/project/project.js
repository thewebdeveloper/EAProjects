Template.project.helpers({
  // To check if the resource in Strategic type
  isStrategic: function(type) {
    if (type === 'Strategic') {
      return true;
    }
  },

  // To get the update form for the related users only
  getMatchedName: function(name) {
    var loggedInUsername = Meteor.user().username;
    if (loggedInUsername == name) {
      return true;
    }
  },

  //To get the signed in resource
  loggedInUserId: function() {
    var projectId = Router.current().params._id;
    var loggedIn = Meteor.user().username;
    var projectUsername = projectId.username
    if (loggedIn === projectUsername) {
      return true;
    }
    else {
      return false;
    }
  },
  
  // For styling purposes, if pending => label will be yellow, else green
  resourceStatus: function(status) {
    if (status == 'Pending') {
      return true;
    } else {
      return false;
    }
  }
});


Template.project.events({
  // Deleting the Project
  'click .delete-project': function(){
    // Project Id
    var projectId = Router.current().params._id;
    // Confirming if the User really wants to delete the project.
    if(confirm("Are you sure about deleting this project?")) {
      Meteor.call('projects.remove', projectId);
      Router.go('projects');
      Bert.alert( 'Project has been Deleted successfully!', 'success', 'growl-top-right' );
    }
    return false;
  },

  // Updating Project Name
  'submit .update-project': function(event) {
    // Setting variables to hold data
    var projectId = Router.current().params._id;
    var name = event.target.projectName.value;
    // Updating Project Name
    Meteor.call('projects.update', projectId, name)
    // Notifying the User
    Bert.alert( 'Project Name has been Updated successfully!', 'success', 'growl-top-right' );
    return false;
  },

  // Updating Resource status
  'submit .update-resource-status': function(event) {
    event.preventDefault(); // preventing the default browser behavior
    // Setting variables to hold data
    var projectId = Router.current().params._id;
    var id = this.id;
    var myStatus = document.getElementById(id).value;
    // Updating Resource status
    Meteor.call('resources.updateResourceStatus', projectId, id, myStatus);
    // Notifying the User
    Bert.alert( 'Your Task Status has been Completed Successfully! An email notification will be sent to you', 'success', 'growl-top-right' );
    return false;
  }

})
