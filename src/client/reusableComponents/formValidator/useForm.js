import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    userPassword: ""
  });

  //We would need a new state for errors
  //function that validates these errors
  //pass these erros back to form

  const [errors, setErrors] = useState({});

  //This will allow us to the callback
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    //To avoid mutating we can follow the below method
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    //handle errors
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  //Called only when erros are changed
  useEffect(() => {
    if (Object.keys(errors).length == 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
