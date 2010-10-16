var Flickr = {
  url : '',
  
  setup : function () {
    var win     = Titanium.UI.currentWindow;
    var loader  = Titanium.Network.createHTTPClient();
    loader.open('GET', this.url);
    loader.onload = function() {
      Ti.API.info(this.responseText);
      var data = JSON.parse(this.responseText);
      // win.title = data.title;
      win.add( Flickr.createPhotoView(data) );
    };
    loader.send();
  },

  createPhotoView : function (data) {
    var views = data.items.map(function (item) {
      var baseView = Titanium.UI.createView({
        height: 'auto',
        top   : 5,
        right : 5,
        bottom: 5,
        left  : 5,
        backgroundColor: '#fff'
      });

      var title = Titanium.UI.createLabel({
        text     : item.title,
        textAlign: 'center',
        color    : '#000',
        height   : 24,
        top      : 200,
        font     : { fontSize: 18, fontWeight: 'bold' }
      });

      var date = Titanium.UI.createLabel({
        text      : item.date_taken,
        textAlign : 'center',
        color     : '#666',
        top       : 220,
        height    : 20,
            font      : { fontSize: 12 }
      });

      var imageView = Titanium.UI.createImageView({
        image: item.media.m,
        top  : -100
      });

      baseView.add(imageView);
      baseView.add(title);
      baseView.add(date);
      
      return baseView;
    });
        
    return Titanium.UI.createScrollableView({
      views: views
    });
  }
};
