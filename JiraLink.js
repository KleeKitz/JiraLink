const preurl = "https://optanix.atlassian.net/browse/";
var fullurl = "";
var regex = new RegExp('^([A-Z]|[a-z]){1,5}-[0-9]{1,5}$'); //Matches only on 1-5 letters and 1-5 numbers

/*
TODO - Eventually figure out a method of determining if it's a Jira type BEFORE creating the menu.
TODO - Replace all occurences of the string with links? No need for context menu option at all perhaps?
*/

browser.contextMenus.create({
    id: "gotoJira",
    title: "Open as Jira Page: %s",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {

  var selText = info.selectionText.trim();
  /*console.log("Item " + info.menuItemId + " clicked " +
              "in tab " + tab.id + " containing text: " + selText);
  */
  if ( regex.test(selText) ) {
  	// If it doesn't look like a Jira type, don't make it a URL.
  	fullurl = preurl + selText;
  } else {
	onError();
  }

  browser.tabs.create({
  	url:fullurl
  });
  //console.log(fullurl);
});

function onError() {
	throw new Error("Not creating new tab as it was not a valid Jira Type.")
};


