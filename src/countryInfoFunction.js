function store() {
  country = document.getElementById("country"); // 나라와 확진자 수를 입력하는 태그를 받아온다.
  patient = document.getElementById("patient");

  sessionStorage.setItem(country.value, patient.value); // 세션 스토리지에 나라와 확진자 수를 저장한다.

  country.value = null; // 입력 태그를 비운다.
  patient.value = null;
}

function search() {
  country = document.getElementById("country"); // 나라와 확진자 수를 입력하는 태그를 받아온다.
  patient = document.getElementById("patient");

  let result = sessionStorage.getItem(country.value); // 세션 스토리지에서 나라명에 맞는 확진자 수를 가져온다.
  if (!result) {
    patient.value = "저장되어 있지 않은 나라입니다."; // 저장되어 있지 않으면 메시지를 전송한다.
  } else {
    patient.value = result;
  }
}
