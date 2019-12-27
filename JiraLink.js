const preurl = "https://optanix.atlassian.net/browse/";
var fullurl = "";
var regex = new RegExp('([A-Z]|[a-z]){1,5}-([0-9]{1,5})');

browser.contextMenus.create({
    id: "gotoJira",
    title: "Open as Jira Page: %s",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  console.log("Item " + info.menuItemId + " clicked " +
              "in tab " + tab.id);
  console.log(info.selectionText);
  
  const selText = info.selectionText;

  if ( regex.test(selText) ) {
  	fullurl = preurl + selText;
  } else {
  	browser.contextMenus.remove(info.menuItemId);
  	throw new Error("Error! \"" + selText + "\" is not a valid Jira issue type!");
  }


  

  browser.tabs.create({
  	url:fullurl
  });
  console.log(fullurl);
});