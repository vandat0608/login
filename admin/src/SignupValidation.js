function Validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passsword_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    errors.name = "Name should not be empty";
  } else {
    errors.email = "";
  }

  if (values.email === "") {
    errors.email = "Name should not be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = " Email Didn't match ";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = " password should not be empty";
  } else if (!passsword_pattern.test(values.password)) {
    errors.password = " Password Didn't match ";
  } else {
    errors.password = "";
  }
  return errors;
}
export default Validation;
