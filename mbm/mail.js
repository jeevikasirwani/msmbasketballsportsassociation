const firebaseConfig = {
        apiKey: "AIzaSyBNBwBM8G4KE_u8ZK1War4clDbKGqZWAV0",
        authDomain: "contact-form-4d5f2.firebaseapp.com",
        databaseURL: "https://contact-form-4d5f2-default-rtdb.firebaseio.com",
        projectId: "contact-form-4d5f2",
        storageBucket: "contact-form-4d5f2.appspot.com",
        messagingSenderId: "614410889276",
        appId: "1:614410889276:web:125817fa8babc97000bb39",
        measurementId: "G-HC9E2FQ9SC"
      
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contact-form");
  
  document.getElementById("contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone=getElementVal("phone")
    var msg = getElementVal("msg");
  
    saveMessages(name, email,phone, msg);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contact-form").reset();
  }
  
  const saveMessages = (name, email,phone,msg) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      phone:phone,
      msg: msg,

    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };