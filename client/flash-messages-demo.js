Handlebars.registerHelper('myFlashIdHelper', function() {
    return { id: 'myFlashId'};
});

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
    'click a.clear-messages' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.clear();
    },
    'click a.show-alert' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendAlert("You could be in trouble.");
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
    // named...
    'click a.named-show-alert' : function (e, tmpl) {
        e.preventDefault();
        FlashMessages.sendAlert("You could be in trouble.", {id: 'myFlashId'});
    },
    'click a.named-show-error' : function (e, tmpl) {
        e.preventDefault();
        FlashMessages.sendError("Stop! your doing something wrong with your life.", {id: 'myFlashId'});
    },
    'click a.named-show-success' : function (e, tmpl) {
        e.preventDefault();
        FlashMessages.sendSuccess("Great! you're a successful user.", {id: 'myFlashId'});
    },
    'click a.named-show-info' : function (e, tmpl) {
        e.preventDefault();
        FlashMessages.sendInfo("It's ok. Nothing important happening.", {id: 'myFlashId'});
    },
    // end named...
    'click a.show-message-scroll' : function (e, tmpl) {
      e.preventDefault();
      FlashMessages.sendAlert("I'm here!");
    }
  });