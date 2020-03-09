let fn = document.getElementById("fname");

let em = document.getElementById("email");

let msg = document.getElementById("message");

let button = document.getElementById("button");

let regularExpressionToValidateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function formValidator() {
    let feedback = {};
    let errors = {};

    if (fn.value != null && fn.value.trim() != "") {
        feedback.fullname = fn.value.trim();
    } else {
        errors.fn = "Please provide your full name";
    }

    if (em.value != null && em.value.trim() != "") {
	if(regularExpressionToValidateEmail.test(em.value.trim())){
	     feedback.email = em.value.trim();
	} else {
             errors.em = "Please provide a valid email address";
    	}   
    } else {
        errors.em = "Please provide your email";
    }

    if (msg.value != null && msg.value.trim() != "") {
        feedback.message = msg.value.trim();
    } else {
        errors.msg = "Please provide your comments";
    }

    if (Object.keys(errors).length === 0) {
        console.log(feedback);
    } else {
        console.log(errors);    
    }
}

button.addEventListener("click", formValidator);
