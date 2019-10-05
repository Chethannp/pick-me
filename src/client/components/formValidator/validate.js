//Password
// the password needs to be more than 0 chars
// the password needs to be more than 10 chars

export default function validate(values) {
  let errors = {};

  //Email
  // the string needs to be more than 0 chars
  // the string needs to be an email
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!RegExp(/\S+@\S+\.\S+/).test(values.email)) {
    errors.email = "Email is invalid";
  }

  //Password
  // the string needs to be more than 8 chars
  // the string needs to be an email
  if (!values.userPassword) {
    errors.userPassword = "Password is required!";
  } else if (
    !RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/).test(
      values.userPassword
    )
  ) {
    errors.userPassword =
      "Password must have atleast 8 characters with 1 special character, 1 uppercase, 1 lowercase and 1 numeric letter";
  }
  return errors;
}
