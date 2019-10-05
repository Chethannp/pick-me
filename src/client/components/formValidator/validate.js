//Password
// the password needs to be more than 0 chars
// the password needs to be more than 10 chars

export default function validate(values) {
  let errors = {};

  //Email
  // the string needs to be more than 0 chars
  // the string needs to be an email
  if (values.email) {
    if (!RegExp(/\S+@\S+\.\S+/).test(values.email)) {
      errors.email = "Email is invalid";
    }
  }

  //Username
  if (values.userName) {
    if (values.userName <= 4) {
      errors.userName = "Username should be minimum 4 characters";
    }
  }

  //Password
  // the string needs to be more than 8 chars
  // the string needs to be an email
  if (values.password) {
    if (
      !RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/).test(
        values.password
      )
    ) {
      errors.password =
        "Password must have atleast 8 characters with 1 special character, 1 uppercase, 1 lowercase and 1 numeric letter";
    }
  }

  //Login Form
  //loginUserName
  if (values.loginUserName) {
    if (!values.loginUserName) {
      errors.loginUserName = "User name is required!";
    }
  }

  //loginPassword
  if (values.loginPassword) {
    if (!values.loginPassword) {
      errors.loginPassword = "Password is required!";
    }
  }

  return errors;
}
