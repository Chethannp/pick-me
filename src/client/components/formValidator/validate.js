//Password
// the password needs to be more than 0 chars
// the password needs to be more than 10 chars

// const formInputs = {

//   : "",
//   : "",
//   : ""
// };

export default function validate(values) {
  let errors = {};

  switch (true) {
    case values.loginUserName != undefined &&
      (values.loginUserName || values.loginUserName.length == 0):
      errors.loginUserName = "User name is required!";
      break;

    case values.loginPassword != undefined &&
      (values.loginPassword || values.loginPassword.length == 0):
      errors.loginPassword = "Password can't be blank!";
      break;

    case values.firstName != undefined &&
      (values.firstName || values.firstName.length == 0):
      errors.firstName = "First name is required";
      break;

    case values.lastName != undefined &&
      (values.lastName || values.lastName.length == 0):
      errors.lastName = "Last name is required";
      break;

    case values.email != undefined &&
      !RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email):
      errors.email = "Email id is invalid";
      break;

    case values.company != undefined &&
      (values.company || values.company.length == 0):
      errors.company = "Company name is required";
      break;

    case values.designation != undefined &&
      (values.designation || values.designation.length == 0):
      errors.designation = "Current designation is required";
      break;

    case values.experience != undefined &&
      (values.experience || values.experience.length == 0):
      errors.experience = "Total years of experience is required";
      break;

    case values.noticePeriod != undefined &&
      (values.noticePeriod || values.noticePeriod.length == 0):
      errors.noticePeriod = "Current notice period duration is required";
      break;

    default:
      break;
  }

  return errors;
}
