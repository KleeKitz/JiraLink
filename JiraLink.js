const preurl = "https://optanix.atlassian.net/browse/";
var fullurl = "";
var regex = new RegExp('([A-Z]|[a-z]){1,5}-([0-9]{1,5})');

browser.contextMenus.create({
    id: "gotoJira",
    title: "Open as Jira Page: %s",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {

  const selText = info.selectionText;
  console.log("Item " + info.menuItemId + " clicked " +
              "in tab " + tab.id + " containing text: " + selText);

  if ( regex.test(selText) ) {
  	fullurl = preurl + selText;
  } else {
	onError();
  }

  browser.tabs.create({
  	url:fullurl
  });
  console.log(fullurl);
});

function onError() {
	throw new Error("Not creating new tab as it was not a valid Jira Type.")
};