App.EventView = Backbone.View.extend({
  className: 'event',

  initialize: function(){
    console.log('Created an Event View');
    this.template = HandlebarsTemplates['events/event'];
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
})
