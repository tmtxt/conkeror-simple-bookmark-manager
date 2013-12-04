// the path to this module
var csbm_path = get_home_directory();
csbm_path.append(".conkerorrc");
csbm_path.append("modules");
csbm_path.append("csbm");
// the path to the csbm.xul
var csbm_xul_path = csbm_path;
csbm_xul_path.append("csbm.xul");

// add permission for openning remote xul
Components.classes["@mozilla.org/permissionmanager;1"]
  .getService(Components.interfaces.nsIPermissionManager)
  .add(make_uri(csbm_xul_path), 'allowXULXBL', Components.interfaces.nsIPermissionManager.ALLOW_ACTION);

// interactive command for openning the bookmark manager
interactive("testtest", "test",
			function(I){
			  var ww = Components.classes["@mozilla.org/embedcomp/window-watcher;1"]
                .getService(Components.interfaces.nsIWindowWatcher);
			  var win = ww.openWindow(I.buffer.document.defaultView, make_uri(csbm_xul_path).spec ,
									  "Open Simple Bookmark Manager", "chrome,centerscreen", null);
			});

// export the library
provide("conkeror-simple-bookmark-manager");
