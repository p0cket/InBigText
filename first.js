pageID = 45123134;
i = pageID;
var pageContent = [];

pageContent[45123134] = {
  thisName: "This is what you'll look like",
  thisImage: "http://i.imgur.com/8Olvbjv.jpg",
}

function getPost(i) {
  document.getElementById("text-spot").innerHTML = pageContent[i].thisName;
  document.getElementById("img-spot").src = pageContent[i].thisImage;
}

window.onload = function() {
  getPost(pageID);
}
