Template.projects.helpers({
  // The main data
  projects: function() {
    return Projects.find({}, {sort:{createdAt: -1}});
  },
  // To show the total no. of projects in DB...
  allProjects: function() {
    return Projects.find().count();
  },
  // Checking if the project status is Pending or Completed
  projectStatus: function(status) {
    if (status == 'Pending') {
      return true;
    } else {
      return false;
    }
  }
});
