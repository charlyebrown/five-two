App.EventsFormView = Backbone.View.extend({
  el: '#event-form',
  initialize: function() {
    console.log('New Events Form View');
    this.render();
  },

  template: HandlebarsTemplates['events/form'],

  render: function(){
    this.$el.html(this.template());
  },

  events: {
    'click span.new-event': 'newEvent',
    'click span.cancel': 'cancel'
  },

  newEvent: function(){
    var data= {
      title: this.$("[name='title']").val(),
      location: this.$("[name='location']").val(),
      start_date: this.$("[name='start_date']").val(),
      end_date: this.$("[name='end_date']").val()
    };
    this.collection.create(data, {success: function(){
      $('input').val('');
      $('#event-form').hide(100);
      App.router.navigate('')
    }
  });
  }
})
