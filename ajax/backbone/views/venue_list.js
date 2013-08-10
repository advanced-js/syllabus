var VenueList = Backbone.View.extend({
  tagName: 'ul',
  render: function(){
    this.collection.forEach(function(venue){
      var venueView = new VenueItem({
        model: venue
      });
      venueView.render();

      this.$el.append(venueView.$el);
    }, this);
  }
});
