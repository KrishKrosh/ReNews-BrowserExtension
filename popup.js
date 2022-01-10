var urlMapping = {
  fake: "./nextpage.html",
  true: "./truepage.html",
};

var a = 0;
function count() {
  a++;
  var value = document.getElementById("value").value;
  console.log(value);
  if (value == "fake") {
    window.location = urlMapping["true"];
  } else {
    window.location = urlMapping["fake"];
  }
}
document.getElementById("submit-form").onclick = count;

// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
// chrome.tabs.executeScript(
//   {
//     code: "window.getSelection().toString();",
//   },
//   function (selection) {
//     document.getElementById("output").innerHTML = selection[0];
//   }
// );

// chrome.extension.onRequest.addListener(function (
//   request,
//   sender,
//   sendResponse
// ) {
//   if (request.method == "getSelection")
//     sendResponse({ data: window.getSelection().toString() });
//   else sendResponse({});
// });
// chrome.tabs.executeScript(
//   {
//     code: "window.getSelection().toString();",
//   },
//   function (selection) {
//     document.getElementById("output").value = selection[0];
//   }
// );
