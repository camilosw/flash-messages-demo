if (Meteor.isClient) {
  Template.main.events({
    'click a.show-message' : function (e, tmpl) {
      e.preventDefault();
      Meteor.Messages.sendInfo("I'm a message.");
    },
    'click a.clear-messages' : function (e, tmpl) {
      e.preventDefault();
      Meteor.Messages.clear();
    },
    'click a.show-alert' : function (e, tmpl) {
      e.preventDefault();
      Meteor.Messages.sendAlert("You could be in trouble.");
    },
    'click a.show-error' : function (e, tmpl) {
      e.preventDefault();
      Meteor.Messages.sendError("Stop! your doing something wrong with your life.");
    },
    'click a.show-success' : function (e, tmpl) {
      e.preventDefault();
      Meteor.Messages.sendSuccess("Great! you're a successful user.");
    },
    'click a.show-info' : function (e, tmpl) {
      e.preventDefault();
      Meteor.Messages.sendInfo("It's ok. Nothing important happening.");
    },
    'click a.show-message-scroll' : function (e, tmpl) {
      e.preventDefault();
      Meteor.Messages.sendAlert("I'm here!");
    }
  });
}
