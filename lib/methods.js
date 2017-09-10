Meteor.methods({

  'projects.insert'(name, resourcesArr) {
    Projects.insert({
      name: name,
      resources: resourcesArr
    }, function(error) {
      if (error) {
        alert(error);
      }
      else {
        Router.go('/');
      }
    });
  },

  'projects.remove'(projectId) {
    Projects.remove(projectId);
  },

  'projects.update'(projectId, name) {
    Projects.update(projectId, {
      $set: { name: name }
    });
  },

  'resources.updateResourceStatus'(projectId, id, myStatus) {
    Projects.update(
       { _id: projectId, "resources.id": id },
       { $set: { "resources.$.status" : myStatus, "resources.$.completedDate": new Date() } }
    );
  }
})
