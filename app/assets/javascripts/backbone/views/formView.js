App.EventsFormView = Backbone.View.extend({
  el: '#event-container',
  initialize: function() {
    console.log('New Events Form View Created');
    this.render();
  },

  template: HandlebarsTemplates['events/form'],

  render: function(){
    this.$el.html(this.template());
  },

  events: {
    'click span.add-event': 'newEvent',
    'click span.cancel': 'cancel',
  },

  newEvent: function(){
    console.log('adding new event')
    var data= {
      title: this.$("[name='title']").val(),
      location: this.$("[name='location']").val(),
      start_date: this.$("[name='start_date']").val(),
      end_date: this.$("[name='end_date']").val()
    };
    this.collection.create(data, {success: function(){
      $('input').val('');
      $('.event-form').hide(100);
      App.router.navigate('')
      }
    });
  },

  cancel: function(){
    App.router.navigate('')
    $('span.add_event').show();
    this.$('.event-form').hide();
  }
})
