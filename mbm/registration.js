
const firebaseConfig = {
    apiKey: "AIzaSyAAs-tQCAqL64JHlNJJ64_pU3mxnB0Nnr8",
    authDomain: "registration-e4499.firebaseapp.com",
    databaseURL: "https://registration-e4499-default-rtdb.firebaseio.com",
    projectId: "registration-e4499",
    storageBucket: "registration-e4499.appspot.com",
    messagingSenderId: "691100970124",
    appId: "1:691100970124:web:1cc83be9a3ec26581c9fa9",
    measurementId: "G-7N2CMQRLBX"
};




// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var registrationDB = firebase.database().ref("registration");

document.getElementById("registration").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone = getElementVal("phone")
    var event = getElementVal("event");

    saveMessages(name, email, phone, event);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("registration").reset();
}

const saveMessages = (name, email, phone, event) => {
    var newRegistration = registrationDB.push();

    newRegistration.set({
        name: name,
        email: email,
        phone: phone,
        event: event,

    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};