App.EventView = Backbone.View.extend({
    className: 'event',

  initialize: function(){
    console.log('Created an Event View')
  },

  template: HandlebarsTemplates['/events/event'],

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
})
