// Instantiate Projects DB
Projects = new Mongo.Collection('projects');

// Creating Schema for our Project Structure
Projects.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Project Name",
    max: 200
  },
  status: {
    type: String,
    allowedValues: ['Pending', 'Completed'],
    autoValue: function() {
      return 'Pending';
    }
  },
  resources: {
    label: "Project Resources",
    type: Array,
  },
  "resources.$": {
    type: Object
  },
  "resources.$.id": {
    type: String,
    autoValue: function(){
      return Math.random().toString(36).split('').filter( function(value, index, self) {
        return self.indexOf(value) === index;
      }).join('').substr(2,8);
    }
  },
  "resources.$.name": {
    type: String
  },
  "resources.$.type": {
    type: String // ['Strategic', 'Technical']
  },
  "resources.$.status": {
    type: String,
    allowedValues:['Pending', 'Completed'],
    autoValue: function(){
      return 'Pending';
    }
  },
  "resources.$.completedDate": {
    type: Date,
    autoValue: function() {
      if(this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
  userId: {
    type: String,
    autoValue: function(){
      return Meteor.userId();
    }
  },
  createdBy: {
    type: String,
    autoValue: function() {
      return Meteor.users.findOne({_id: this.userId}).username;
    }
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if(this.isInsert) {
        return new Date();
      }
    }
  },
  updatedBy: {
    type: String,
    autoValue: function() {
      return Meteor.users.findOne({_id: this.userId}).username;
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if(this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
}));
