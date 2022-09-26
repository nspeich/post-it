import ListPostItObject from "./ListPostItObject";
import PostItObject from "./PostItObject";

var counter = 1;
export var postitList_ = [
  new PostItObject(
    counter++,
    "title 1",
    "Tape your post-it here ",
    "#FF0000"
  ),
  new PostItObject(
    counter++,
    "title 2",
    "The soft fuzzy material you see on the outside is what's on the inside. It's not lined with a \
different material, but it is very soft and comfy.The soft fuzzy material you see on the outside \
The soft fuzzy material you see on the outside is what's on the inside. It's not lined with a \
different material, but it is very soft and comfy.The soft fuzzy material you see on the outside \
is what's on the inside. It's not lined with a different material, but it is very soft and comfy.",
    "#FF00FF"
  ),
  new PostItObject(
    counter++,
    "title3",
    "The soft fuzzy material you see on the outside is what's on the inside. It's not lined with a \
different material, but it is very soft and comfy.The soft fuzzy material you see on the outside \
The soft fuzzy material you see on the outside is what's on the inside. It's not lined with a \
different material, but it is very soft and comfy.The soft fuzzy material you see on the outside \
is what's on the inside. It's not lined with a different material, but it is very soft and comfy.",
    "#FF0000"
  ),
  new PostItObject(
    counter++,
    "title4",
    "The soft fuzzy material you see on the outside is what's on the inside. It's not lined with a \
different material, but it is very soft and comfy.The soft fuzzy material you see on the outside \
The soft fuzzy material you see on the outside is what's on the inside. It's not lined with a \
different material, but it is very soft and comfy.The soft fuzzy material you see on the outside \
is what's on the inside. It's not lined with a different material, but it is very soft and comfy.",
    "#FF0000"
  ),
  new PostItObject(
    counter++,
    "title5",
    "The soft fuzzy material you see on the outside is what's on the inside. It's not lined with a \
different material, but it is very soft and comfy.The soft fuzzy material you see on the outside \
The soft fuzzy material you see on the outside is what's on the inside. It's not lined with a \
different material, but it is very soft and comfy.The soft fuzzy material you see on the outside \
is what's on the inside. It's not lined with a different material, but it is very soft and comfy.",
    "#FF0000"
  ),
];

export var listPostItObject = new ListPostItObject();
var postitList=[]

export function getAllPostIt() {
  var listPostItObject = JSON.parse(localStorage.getItem("postitListItem"));
  if (listPostItObject) postitList =  listPostItObject.postitList;
  else {
   postitList=postitList_
  }
  return postitList;
}

export function getPostItById(id) {
  return postitList.filter((postit) => postit.id == id)[0];
}

export function updatePostIt(postItObj) {
  let postItObject = getPostItById(postItObj.id);
  postItObject.title = postItObj.title;
  postItObject.description = postItObj.description;

  listPostItObject.postitList = postitList;
  localStorage.setItem("postitListItem", JSON.stringify(listPostItObject));
}

export function createPostIt(title, description) {
  let postItObject = new PostItObject(counter++, title, description, "#FF0000");
  postitList.push(postItObject);

  listPostItObject.postitList = postitList;
  localStorage.setItem("postitListItem", JSON.stringify(listPostItObject));
}

export function deletePostIt(id) {
  postitList = postitList.filter((postit) => postit.id != id);

  listPostItObject.postitList = postitList;
  localStorage.setItem("postitListItem", JSON.stringify(listPostItObject));
}

