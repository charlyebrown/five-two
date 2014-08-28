App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'users/:id/new': 'newGrumble',
    'grumbles/:id/edit': 'editGrumble'
  },
  initialize: function() {
    console.log('New Router!');
    App.Collections.grumbles = new App.GrumbleCollection();
    App.Views.grumbleListView = new App.GrumbleListView({collection: App.Collections.grumbles});
    App.Views.grumbleFormView = new App.GrumbleFormView({collection: App.Collections.grumbles});
  },
  index: function() {
    console.log('FIRED INDEX')
    App.Collections.grumbles.fetch({reset: true});
    $('#grumble-form').hide();
  },
  newGrumble: function() {
    console.log('FIRED NEW')
    App.Collections.grumbles.fetch({reset: true});
    $('#grumble-form').fadeIn(500)
  },
  editGrumble: function(id) {
    console.log('FIRED EDIT')
    App.Collections.grumbles.fetch({reset: true, success: function() {
        $('#'+ id).find('span.edit').click()
      }}
    );
    $('#grumble-form').hide();
  }
});
