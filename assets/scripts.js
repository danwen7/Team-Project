const clickableList = document.querySelectorAll(".clickable-list li");
var currentTopic = "machine-learning";
var currentName = "suva-pokharel";
const jsonMapTopics = {
  ml: "machine-learning",
  rp: "raspberry-pi",
  av: "autonomous-vehicles",
  cs: "cloud-services",
};
const jsonMapNames = {
  sp: "suva-pokharel",
  vb: "vladimir-bazhenskiy",
  am: "ayoj-mayor",
  ns: "ned-sanford",
  dw: "daniel-wendt",
  sm: "saqib-mir",
  bf: "benjamin-finn",
};
for (let i = 0; i < clickableList.length; i++) {
  clickableList[i].addEventListener("click", function (e) {
    handleActive(e.target);
    var target = e.target.id;
    if (jsonMapTopics[target]) {
      var jsonString = jsonMapTopics[target];
      var selector = document.querySelector(`.${jsonString}`);
      handleSwitch(selector, jsonString, "topic");
    } else {
      var jsonString = jsonMapNames[target];
      var selector = document.querySelector(`.${jsonString}`);
      handleSwitch(selector, jsonString, "name");
    }
  });
}

const handleSwitch = function (element, jsonString, context) {
  if (context == "topic") {
    var currentlyActive = document.querySelector(`.${currentTopic}`);
    currentTopic = jsonString;
  } else {
    var currentlyActive = document.querySelector(`.${currentName}`);
    currentName = jsonString;
  }
  currentlyActive.classList.add("hidden");
  element.classList.remove("hidden");
};

const handleActive = function (element) {
  var siblings = element.parentNode.children;
  for (let i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove("active");
  }
  element.classList.add("active");
};
