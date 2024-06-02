function submitForm() {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let commentInput = document.getElementById("comment");
  let agreeInput = document.getElementById("agree");

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let comment = commentInput.value.trim();

  if (name === "" || email === "" || comment === "" || !agreeInput.checked) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  let nameReg = /^[А-Яа-яёЁ\s]+$/;
  if (!nameReg.test(name)) {
    alert("Введите корректное имя (только буквы и пробелы)");
    return;
  }

  let emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/iu;
  if (!emailReg.test(email)) {
    alert("Введите корректную почту");
    return;
  }

  alert(
    "Форма отправлена!\nИмя: " +
      name +
      "\nEmail: " +
      email +
      "\nКомментарий: " +
      comment
  );

  nameInput.value = "";
  emailInput.value = "";
  commentInput.value = "";
  agreeInput.checked = false;
}
