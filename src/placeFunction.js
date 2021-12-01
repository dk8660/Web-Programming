function editPlace1() {
  // 첫 번째 장소의 정보를 수정한다.
  let name = document.getElementById("place1Name"); // 지역 이름, 소식, 수정/삭제 버튼을 받아온다.
  let news = document.getElementById("place1News");
  let button = document.getElementById("place1button");
  let delButton = document.getElementById("place1delete");

  let input_name = document.createElement("input"); // 새로 지역의 이름, 소식을 적을 태그를 생성한다.
  input_name.type = "text";
  input_name.id = "place1Name";
  input_name.value = name.innerHTML;

  let input_news = document.createElement("textarea");
  input_news.id = "place1News";
  input_news.value = news.innerHTML;

  let input_button = document.createElement("input"); // 저장 버튼을 만든다.
  input_button.type = "button";
  input_button.id = "place1button";
  input_button.value = "저장";
  input_button.addEventListener("click", savePlace1);

  let parent = document.getElementById("place1");

  parent.removeChild(name); // 기존의 태그들을 지우고 새로 생성한 태그들을 삽입한다.
  parent.removeChild(news);
  parent.removeChild(button);
  parent.removeChild(delButton);

  parent.appendChild(input_name);
  parent.appendChild(input_news);
  parent.appendChild(input_button);
}

function savePlace1() {
  let name = document.getElementById("place1Name"); // 지역 이름, 소식, 저장 버튼을 받아온다.
  let news = document.getElementById("place1News");
  let button = document.getElementById("place1button");

  let input_name = document.createElement("h3"); // 지역 이름, 소식 태그를 생성
  input_name.id = "place1Name";
  input_name.innerHTML = name.value;

  let input_news = document.createElement("p");
  input_news.id = "place1News";
  input_news.innerHTML = news.value;

  let input_button = document.createElement("input"); // 수정/삭제 버튼을 생성
  input_button.type = "button";
  input_button.id = "place1button";
  input_button.value = "수정";
  input_button.addEventListener("click", editPlace1);

  let delButton = document.createElement("input");
  delButton.type = "button";
  delButton.id = "place1delete";
  delButton.value = "삭제";
  delButton.addEventListener("click", deletePlace1);

  let parent = document.getElementById("place1");

  parent.removeChild(name); // 기존의 태그를 삭제하고 새로 생성한 태그들을 삽입한다.
  parent.removeChild(news);
  parent.removeChild(button);

  parent.appendChild(input_name);
  parent.appendChild(input_news);
  parent.appendChild(delButton);
  parent.appendChild(input_button);

  let anchor = document.getElementById("anchor1");
  anchor.innerHTML = name.value;
}

function editPlace2() {
  // 위의 구조를 반복
  let name = document.getElementById("place2Name");
  let news = document.getElementById("place2News");
  let button = document.getElementById("place2button");
  let delButton = document.getElementById("place2delete");

  let input_name = document.createElement("input");
  input_name.type = "text";
  input_name.id = "place2Name";
  input_name.value = name.innerHTML;

  let input_news = document.createElement("textarea");
  input_news.id = "place2News";
  input_news.value = news.innerHTML;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "place2button";
  input_button.value = "저장";
  input_button.addEventListener("click", savePlace2);

  let parent = document.getElementById("place2");

  parent.removeChild(name);
  parent.removeChild(news);
  parent.removeChild(button);
  parent.removeChild(delButton);

  parent.appendChild(input_name);
  parent.appendChild(input_news);
  parent.appendChild(input_button);
}

function savePlace2() {
  let name = document.getElementById("place2Name");
  let news = document.getElementById("place2News");
  let button = document.getElementById("place2button");

  let input_name = document.createElement("h3");
  input_name.id = "place2Name";
  input_name.innerHTML = name.value;

  let input_news = document.createElement("p");
  input_news.id = "place2News";
  input_news.innerHTML = news.value;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "place2button";
  input_button.value = "수정";
  input_button.addEventListener("click", editPlace2);

  let delButton = document.createElement("input");
  delButton.type = "button";
  delButton.id = "place2delete";
  delButton.value = "삭제";
  delButton.addEventListener("click", deletePlace2);

  let parent = document.getElementById("place2");

  parent.removeChild(name);
  parent.removeChild(news);
  parent.removeChild(button);

  parent.appendChild(input_name);
  parent.appendChild(input_news);
  parent.appendChild(delButton);
  parent.appendChild(input_button);

  let anchor = document.getElementById("anchor2");
  anchor.innerHTML = name.value;
}

function editPlace3() {
  let name = document.getElementById("place3Name");
  let news = document.getElementById("place3News");
  let button = document.getElementById("place3button");
  let delButton = document.getElementById("place3delete");

  let input_name = document.createElement("input");
  input_name.type = "text";
  input_name.id = "place3Name";
  input_name.value = name.innerHTML;

  let input_news = document.createElement("textarea");
  input_news.id = "place3News";
  input_news.value = news.innerHTML;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "place3button";
  input_button.value = "저장";
  input_button.addEventListener("click", savePlace3);

  let parent = document.getElementById("place3");

  parent.removeChild(name);
  parent.removeChild(news);
  parent.removeChild(button);
  parent.removeChild(delButton);

  parent.appendChild(input_name);
  parent.appendChild(input_news);
  parent.appendChild(input_button);
}

function savePlace3() {
  let name = document.getElementById("place3Name");
  let news = document.getElementById("place3News");
  let button = document.getElementById("place3button");

  let input_name = document.createElement("h3");
  input_name.id = "place3Name";
  input_name.innerHTML = name.value;

  let input_news = document.createElement("p");
  input_news.id = "place3News";
  input_news.innerHTML = news.value;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "place3button";
  input_button.value = "수정";
  input_button.addEventListener("click", editPlace3);

  let delButton = document.createElement("input");
  delButton.type = "button";
  delButton.id = "place3delete";
  delButton.value = "삭제";
  delButton.addEventListener("click", deletePlace3);

  let parent = document.getElementById("place3");

  parent.removeChild(name);
  parent.removeChild(news);
  parent.removeChild(button);

  parent.appendChild(input_name);
  parent.appendChild(input_news);
  parent.appendChild(delButton);
  parent.appendChild(input_button);

  let anchor = document.getElementById("anchor3");
  anchor.innerHTML = name.value;
}

function deletePlace1() {
  // 부모와 자식의 아이디를 받아와 자식을 삭제한다.
  let place = document.getElementById("place1");
  let parent = document.getElementById("placeInfo");

  let placeList = document.getElementById("placeList");
  let list = document.getElementById("list1");

  parent.removeChild(place);
  placeList.removeChild(list);
}

function deletePlace2() {
  let place = document.getElementById("place2");
  let parent = document.getElementById("placeInfo");

  let placeList = document.getElementById("placeList");
  let list = document.getElementById("list2");

  parent.removeChild(place);
  placeList.removeChild(list);
}

function deletePlace3() {
  let place = document.getElementById("place3");
  let parent = document.getElementById("placeInfo");

  let placeList = document.getElementById("placeList");
  let list = document.getElementById("list3");

  parent.removeChild(place);
  placeList.removeChild(list);
}

function addNewPlace() {
  let input_div = document.createElement("div");
  input_div.id = "newPlace";

  let input_name = document.createElement("input");
  input_name.type = "text";
  input_name.id = "newPlaceName";

  let input_news = document.createElement("textarea");
  input_news.id = "newPlaceNews";

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "newPlacebutton";
  input_button.value = "저장";
  input_button.addEventListener("click", saveNewPlace);

  let parent = document.getElementById("placeInfo");
  parent.appendChild(input_div);

  input_div.appendChild(input_name);
  input_div.appendChild(input_news);
  input_div.appendChild(input_button);

  let addButton = document.getElementById("addbutton");
  parent.removeChild(addButton);
}

function editNewPlace() {
  let name = document.getElementById("newPlaceName");
  let news = document.getElementById("newPlaceNews");
  let button = document.getElementById("newPlacebutton");
  let delButton = document.getElementById("newPlacedelete");

  let input_name = document.createElement("input");
  input_name.type = "text";
  input_name.id = "newPlaceName";
  input_name.value = name.innerHTML;

  let input_news = document.createElement("textarea");
  input_news.id = "newPlaceNews";
  input_news.value = news.innerHTML;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "newPlacebutton";
  input_button.value = "저장";
  input_button.addEventListener("click", saveNewPlace);

  let parent = document.getElementById("newPlace");

  parent.removeChild(name);
  parent.removeChild(news);
  parent.removeChild(button);
  parent.removeChild(delButton);

  parent.appendChild(input_name);
  parent.appendChild(input_news);
  parent.appendChild(input_button);
}

function saveNewPlace() {
  let name = document.getElementById("newPlaceName");
  let news = document.getElementById("newPlaceNews");
  let button = document.getElementById("newPlacebutton");

  let input_name = document.createElement("h3");
  input_name.id = "newPlaceName";
  input_name.innerHTML = name.value;

  let input_news = document.createElement("p");
  input_news.id = "newPlaceNews";
  input_news.innerHTML = news.value;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "newPlacebutton";
  input_button.value = "수정";
  input_button.addEventListener("click", editNewPlace);

  let delButton = document.createElement("input");
  delButton.type = "button";
  delButton.id = "newPlacedelete";
  delButton.value = "삭제";
  delButton.addEventListener("click", deleteNewPlace);

  let parent = document.getElementById("newPlace");

  parent.removeChild(name);
  parent.removeChild(news);
  parent.removeChild(button);

  parent.appendChild(input_name);
  parent.appendChild(input_news);
  parent.appendChild(delButton);
  parent.appendChild(input_button);

  let list = document.createElement("li");
  list.id = "newlist";
  let anchor = document.createElement("a");
  anchor.href = "#newPlace";
  anchor.id = "newAnchor";
  anchor.innerHTML = name.value;

  let placeList = document.getElementById("placeList");
  placeList.appendChild(list);
  list.appendChild(anchor);
}

function deleteNewPlace() {
  let place = document.getElementById("newPlace");
  let parent = document.getElementById("placeInfo");

  let placeList = document.getElementById("placeList");
  let list = document.getElementById("newlist");

  parent.removeChild(place);
  placeList.removeChild(list);
}
