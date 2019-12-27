browser.contextMenus.create({
    id: "gotoJira",
    title: "Open as Jira Page",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  console.log("Item " + info.menuItemId + " clicked " +
              "in tab " + tab.id);
  console.log(info.selectionText);
});