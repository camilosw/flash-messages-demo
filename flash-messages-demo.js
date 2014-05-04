if (Meteor.isClient) {
  Template.main.events({
    'click a.show-message' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendInfo("I'm a message.");
    },
    'click a.autohide-off' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendInfo("I'll be here all the time you want.", { autoHide: false });
    },
    'click a.delay-changed' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendInfo("I'm a fast message!!!", { hideDelay: 1000 });
    },
    'click a.messages-group' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendInfo(["I'm a message", "I'm also a message", "I'm a message too"]);
    },
    'click a.html-message' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendInfo("<strong>You're lucky!</strong>. The package you need is <a href='https://github.com/camilosw/flash-messages'>flash messages</a>");
    },
    'click a.clear-messages' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.clear();
    },
    'click a.show-warning' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendWarning("You could be in trouble.");
    },
    'click a.show-error' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendError("Stop! your doing something wrong with your life.");
    },
    'click a.show-success' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendSuccess("Great! you're a successful user.");
    },
    'click a.show-info' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendInfo("It's ok. Nothing important happening.");
    },
    'click a.show-message-scroll' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendWarning("I'm here!");
    }
  });
}