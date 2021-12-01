function restaurantEdit() {
  // 일반 식당의 함수이다. 다른 업종의 함수도 같은 방식으로 구성되어 있다.
  let time = document.getElementById("restaurant_time"); // 규제된 시간, 인원 수, 수정 버튼을 받아온다.
  let member = document.getElementById("restaurant_member");
  let button = document.getElementById("restaurant_button");

  let input_time = document.createElement("input"); // 새로운 시간을 입력 받을 수 있도록 input 태그를 생성한다.
  input_time.type = "text";
  input_time.id = "restaurant_time";
  input_time.value = time.innerHTML;

  let input_member = document.createElement("input"); // 새로운 인원 수를 입력 받을 수 있도록 input 태그를 생성한다.
  input_member.type = "text";
  input_member.id = "restaurant_member";
  input_member.value = member.innerHTML;

  let input_button = document.createElement("input"); // 저장 버튼을 생성한다.
  input_button.type = "button";
  input_button.id = "restaurant_button";
  input_button.value = "저장";
  input_button.addEventListener("click", restaurantSave);

  let time_parent = document.getElementById("restaurant_time_parent"); // 각각의 부모들을 받아온다.
  let member_parent = document.getElementById("restaurant_member_parent");
  let button_parent = document.getElementById("restaurant_button_parent");

  time_parent.removeChild(time); // 기존 태그를 지우고 새로 만든 태그를 삽입한다.
  time_parent.appendChild(input_time);
  member_parent.removeChild(member);
  member_parent.appendChild(input_member);
  button_parent.removeChild(button);
  button_parent.appendChild(input_button);
}

function restaurantSave() {
  let time = document.getElementById("restaurant_time"); // 입력 받은 정보들을 받아온다.
  let member = document.getElementById("restaurant_member");
  let button = document.getElementById("restaurant_button");

  let input_time = document.createElement("span"); // 저장할 수 있도록 태그들을 새로 생성한다.
  input_time.id = "restaurant_time";
  input_time.innerHTML = time.value;

  let input_member = document.createElement("span");
  input_member.id = "restaurant_member";
  input_member.innerHTML = member.value;

  let input_button = document.createElement("input"); // 수정 버튼으로 다시 바꾸어준다.
  input_button.type = "button";
  input_button.id = "restaurant_button";
  input_button.value = "수정";
  input_button.addEventListener("click", restaurantEdit);

  let time_parent = document.getElementById("restaurant_time_parent"); // 각각의 부모들을 받아온다.
  let member_parent = document.getElementById("restaurant_member_parent");
  let button_parent = document.getElementById("restaurant_button_parent");

  time_parent.removeChild(time); // 다시 입력 받았던 태그들을 지우고 정보를 저장한 태그를 삽입한다.
  time_parent.appendChild(input_time);
  member_parent.removeChild(member);
  member_parent.appendChild(input_member);
  button_parent.removeChild(button);
  button_parent.appendChild(input_button);
}

function PCcafeEdit() {
  let time = document.getElementById("PCcafe_time");
  let member = document.getElementById("PCcafe_member");
  let button = document.getElementById("PCcafe_button");

  let input_time = document.createElement("input");
  input_time.type = "text";
  input_time.id = "PCcafe_time";
  input_time.value = time.innerHTML;

  let input_member = document.createElement("input");
  input_member.type = "text";
  input_member.id = "PCcafe_member";
  input_member.value = member.innerHTML;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "PCcafe_button";
  input_button.value = "저장";
  input_button.addEventListener("click", PCcafeSave);

  let time_parent = document.getElementById("PCcafe_time_parent");
  let member_parent = document.getElementById("PCcafe_member_parent");
  let button_parent = document.getElementById("PCcafe_button_parent");

  time_parent.removeChild(time);
  time_parent.appendChild(input_time);
  member_parent.removeChild(member);
  member_parent.appendChild(input_member);
  button_parent.removeChild(button);
  button_parent.appendChild(input_button);
}

function PCcafeSave() {
  let time = document.getElementById("PCcafe_time");
  let member = document.getElementById("PCcafe_member");
  let button = document.getElementById("PCcafe_button");

  let input_time = document.createElement("span");
  input_time.id = "PCcafe_time";
  input_time.innerHTML = time.value;

  let input_member = document.createElement("span");
  input_member.id = "PCcafe_member";
  input_member.innerHTML = member.value;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "PCcafe_button";
  input_button.value = "수정";
  input_button.addEventListener("click", PCcafeEdit);

  let time_parent = document.getElementById("PCcafe_time_parent");
  let member_parent = document.getElementById("PCcafe_member_parent");
  let button_parent = document.getElementById("PCcafe_button_parent");

  time_parent.removeChild(time);
  time_parent.appendChild(input_time);
  member_parent.removeChild(member);
  member_parent.appendChild(input_member);
  button_parent.removeChild(button);
  button_parent.appendChild(input_button);
}

function karaokeEdit() {
  let time = document.getElementById("karaoke_time");
  let member = document.getElementById("karaoke_member");
  let button = document.getElementById("karaoke_button");

  let input_time = document.createElement("input");
  input_time.type = "text";
  input_time.id = "karaoke_time";
  input_time.value = time.innerHTML;

  let input_member = document.createElement("input");
  input_member.type = "text";
  input_member.id = "karaoke_member";
  input_member.value = member.innerHTML;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "karaoke_button";
  input_button.value = "저장";
  input_button.addEventListener("click", karaokeSave);

  let time_parent = document.getElementById("karaoke_time_parent");
  let member_parent = document.getElementById("karaoke_member_parent");
  let button_parent = document.getElementById("karaoke_button_parent");

  time_parent.removeChild(time);
  time_parent.appendChild(input_time);
  member_parent.removeChild(member);
  member_parent.appendChild(input_member);
  button_parent.removeChild(button);
  button_parent.appendChild(input_button);
}

function karaokeSave() {
  let time = document.getElementById("karaoke_time");
  let member = document.getElementById("karaoke_member");
  let button = document.getElementById("karaoke_button");

  let input_time = document.createElement("span");
  input_time.id = "karaoke_time";
  input_time.innerHTML = time.value;

  let input_member = document.createElement("span");
  input_member.id = "karaoke_member";
  input_member.innerHTML = member.value;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "karaoke_button";
  input_button.value = "수정";
  input_button.addEventListener("click", karaokeEdit);

  let time_parent = document.getElementById("karaoke_time_parent");
  let member_parent = document.getElementById("karaoke_member_parent");
  let button_parent = document.getElementById("karaoke_button_parent");

  time_parent.removeChild(time);
  time_parent.appendChild(input_time);
  member_parent.removeChild(member);
  member_parent.appendChild(input_member);
  button_parent.removeChild(button);
  button_parent.appendChild(input_button);
}

function barEdit() {
  let time = document.getElementById("bar_time");
  let member = document.getElementById("bar_member");
  let button = document.getElementById("bar_button");

  let input_time = document.createElement("input");
  input_time.type = "text";
  input_time.id = "bar_time";
  input_time.value = time.innerHTML;

  let input_member = document.createElement("input");
  input_member.type = "text";
  input_member.id = "bar_member";
  input_member.value = member.innerHTML;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "bar_button";
  input_button.value = "저장";
  input_button.addEventListener("click", barSave);

  let time_parent = document.getElementById("bar_time_parent");
  let member_parent = document.getElementById("bar_member_parent");
  let button_parent = document.getElementById("bar_button_parent");

  time_parent.removeChild(time);
  time_parent.appendChild(input_time);
  member_parent.removeChild(member);
  member_parent.appendChild(input_member);
  button_parent.removeChild(button);
  button_parent.appendChild(input_button);
}

function barSave() {
  let time = document.getElementById("bar_time");
  let member = document.getElementById("bar_member");
  let button = document.getElementById("bar_button");

  let input_time = document.createElement("span");
  input_time.id = "bar_time";
  input_time.innerHTML = time.value;

  let input_member = document.createElement("span");
  input_member.id = "bar_member";
  input_member.innerHTML = member.value;

  let input_button = document.createElement("input");
  input_button.type = "button";
  input_button.id = "bar_button";
  input_button.value = "수정";
  input_button.addEventListener("click", barEdit);

  let time_parent = document.getElementById("bar_time_parent");
  let member_parent = document.getElementById("bar_member_parent");
  let button_parent = document.getElementById("bar_button_parent");

  time_parent.removeChild(time);
  time_parent.appendChild(input_time);
  member_parent.removeChild(member);
  member_parent.appendChild(input_member);
  button_parent.removeChild(button);
  button_parent.appendChild(input_button);
}
