Titanium.UI.setBackgroundColor('#000');
var tabGroup = Titanium.UI.createTabGroup();

var meWin = Titanium.UI.createWindow({  
  titleImage     : 'flickr.png',
  barColor       : '#fff',
  backgroundColor: '#fff',
  url            :'yours.js'
});

var meTab = Titanium.UI.createTab({  
  icon  : 'KS_nav_views.png',
  title : 'Yours',
  window: meWin
});

var friWin = Titanium.UI.createWindow({
  titleImage     : 'flickr.png',
  barColor       : '#fff',
  backgroundColor: '#fff',
  url            : 'contacts.js'
});

var friTab = Titanium.UI.createTab({  
    icon  :'KS_nav_ui.png',
    title :'Contacts',
    window:friWin
});

tabGroup.addTab(meTab);  
tabGroup.addTab(friTab);  
tabGroup.open();
