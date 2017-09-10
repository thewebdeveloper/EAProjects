Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  // Projects Route
  this.route('projects', {
    path: '/',
    template: 'projects'
  });

  // Add a Project
  this.route('addProject', {
    path: '/addProject',
    template: 'addProject'
  });

  // Single Project Route based on project id
  this.route('/project/:_id', {
    path: '/project/:_id',
    template: 'project',
    data: function() {
      return Projects.findOne({_id: this.params._id});
    }
  });
});
