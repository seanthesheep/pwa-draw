angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Cheaper and Faster Built',
    lastText: 'Web applications are built in much less time and cost a lot less money than developing a cross platform native app.'
   
  }, {
    id: 1,
    name: 'Perfect For Small Scale',
    lastText: 'Progressive web apps are perfect for local businesses, one-time events, small organizations, or non profits. There is literally nothing holding you back from creating an app to engage your audience, no matter the size.'
   
  }, {
    id: 2,
    name: 'No App Store!',
    lastText: 'With Progressive Web Apps being independent from an app store, you do not have to worry about conforming to any standards, competing with any apps, or paying any fees.'
    

  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
