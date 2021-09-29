export const validate = (values) => {
  const errors = {};
  console.log(values);
  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (/^[0-9]$/i.test(values.firstname)) {
    errors.firstname = "Name doesn't contain digits";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (/^[0-9]$/i.test(values.lastname)) {
    errors.lastname = "Name doesn't contain digits";
  }
  if (!values.category) {
    errors.category = "Required";
  }
  if (!values.organization) {
    errors.organization = "Required";
  }
  if (!values.projectType) {
    errors.projectType = "Required";
  }
  if (!values.estimatedPrice) {
    errors.estimatedPrice = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.phone) {
    errors.email = "Required";
  }
  return errors;
};
