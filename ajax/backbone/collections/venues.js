var Venues = Backbone.Collection.extend({
  model: Venue,
  url: 'https://api.foursquare.com/v2/venues/search?near=Chicago,IL&oauth_token=AGI5Y15IUCTE4QTQEA1ERUOI0I4DM0NYWZEAZBPGLMEBNPH5&v=20130727',
  parse: function(data){
    return data.response.venues;
  }
});
