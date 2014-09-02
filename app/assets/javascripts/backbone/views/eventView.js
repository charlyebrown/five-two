App.EventView = Backbone.View.extend({
  className: 'event',

  initialize: function(){
    console.log('Created an Event View');
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.template = HandlebarsTemplates['events/event'];
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click span.edit': 'editEvent',
    'click span.destroy': 'deleteEvent',
    'click span.edit-event': 'updateEvent',
    'click span.cancel': 'cancel'
  },

  editEvent: function(){
    console.log('edit an event')
    this.$('.eventShow').hide();
    this.$('.event-form').remove();
    App.router.navigate('events/' + this.model.id + '/edit');
    this.$el.append(HandlebarsTemplates['events/form'](this.model.toJSON()));
    this.$('.event-form').show();
  },

  updateEvent: function(){
    console.log('updating your event');
    var newData= {
      title: this.$("[name='title']").val(),
      location: this.$("[name='location']").val(),
      start_date: this.$("[name='start_date']").val(),
      end_date: this.$("[name='end_date']").val()
    };
    this.model.save(newData, {success: function(){
      App.router.navigate('');
    }});
  },

  deleteEvent: function(){
    this.model.destroy();
  },

  cancel: function(){
    App.router.navigate("");
    this.$('.event-form').remove();
    this.$('.eventShow').show();
  }
})
