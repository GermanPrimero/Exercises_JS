let form = document.querySelector("form");
let events = ["input", "submit"];
let datosUsuario = {};
let paragraphFinalMessage = document.getElementById("finalMessage");
let isInputNameValidated = false;
let isInputEmailValidated = false;

// function delegateMultiple(element, events, handler) {
//   events.forEach(evt => element.addEventListener(evt, handler));
// }

// delegateMultiple(form, ["click", "keydown", "input", "blur"], (event) => {
//   console.log(`Evento: ${event.type}, target: ${event.target.tagName}`);
// });

function delegateEventsInForm(form, events, handler) {
  events.forEach((event) => {
    form.addEventListener(event, handler);
  });
}

// function delegateBlurInForm(form, eventBlur, handler, isCapturingPhase){
//     form.addEventListener(eventBlur, handler, isCapturingPhase);
// }

delegateEventsInForm(form, events, function (event) {
  //   console.log(event.target.tagName + " " + event.type);
  let { type } = event;
  let { value, id, name } = event.target;

  if (type == "input") {
    let paragraphMessage = document.getElementById(id).nextElementSibling;

    if (id == "inputName") {
      datosUsuario = { ...datosUsuario, [name]: value };
      console.log(
        "Executed event " +
          type +
          " in " +
          id +
          " with value: " +
          datosUsuario.name
      );

      if (value != "") {
        if (value.length < 3) {
          paragraphMessage.innerText = "Tiene que tener al menos 3 carácteres";
          paragraphMessage.style.color = "red";
          isInputNameValidated = false;
        } else {
          paragraphMessage.innerText = "";
          paragraphMessage.style.color = "";
          isInputNameValidated = true;
        }
      }
    }

    if (id == "inputEmail") {
      datosUsuario = { ...datosUsuario, [name]: value };
      console.log(
        "Executed event type:" +
          type +
          " in " +
          id +
          " with value: " +
          datosUsuario["email"]
      );

      if (value.includes("@") && value.includes(".")) {
        paragraphMessage.innerText = "";
        paragraphMessage.style.color = "";
        isInputEmailValidated = true;
      } else {
        paragraphMessage.innerText =
          "Tiene que agregar el símbolo @ y terminar por .com, .es o .org";
        paragraphMessage.style.color = "red";
        isInputEmailValidated = false;
      }
    }

    if (isInputNameValidated && isInputEmailValidated) {
      paragraphFinalMessage.innerText = "All inputs are okey";
      paragraphFinalMessage.style.color = "green";
    } else {
      paragraphFinalMessage.innerText = "";
    }
  }

  if (type == "submit") {
    event.preventDefault();
    console.log("🚀 Envío del formulario:", datosUsuario);

    if ((datosUsuario["name"] && datosUsuario["name"].length >= 3) && (datosUsuario["email"] && datosUsuario["email"].includes("@") && datosUsuario["email"].includes(".") )) {
      alert("You have registered the user CONGRATULATIONS");
    } else {
      paragraphFinalMessage.innerText =
        "You forget one data or you have some mistake in the fields";
      paragraphFinalMessage.style.color = "red";
    }
  }
});

form.addEventListener(
  "blur",
  function (event) {
    console.log("Event blur in " + event.target.tagName);
  },
  true
);

// delegateBlurInForm(form, "blur", function(event){
// console.log("Event blur in " + event.target.tagName);

// }, true)

// form.addEventListener("input",function(event){
//     console.log(event.target);
// })
