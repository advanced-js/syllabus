var VenueItem = Backbone.View.extend({
  tagName: 'li',
  render: function(){
    var venueName = this.model.get('name');
    this.$el.text(venueName);
  }
});
