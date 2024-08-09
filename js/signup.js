import {auth,createUserWithEmailAndPassword,db,doc,setDoc,signInWithEmailAndPassword,} from "./firebase.js";

const signUpHandler = async () => {
  try {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const fName = document.querySelector("#fName");
    const gender = document.querySelector("#lName");

    // db obj
    const userObj = {
      fName: fName.value,
      password: password.value,
      email: email.value,
    };
    console.log("userObj", userObj);
    // firstly user signup
    const response = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const uid = response.user.uid;

    const userResponse = await setDoc(doc(db, "users", uid), userObj);
    alert("user successfully signup")
    window.location.href = "./login.html"
    // console.log("userResponse", userResponse);
    // console.log(response, "response");
  } catch (error) {
    console.log("error", error.message);
    alert(error.message);
  }
};

window.signUpHandler = signUpHandler;


