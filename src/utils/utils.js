export const validateField = (value) => {
  const errorMessage = { required: 'This field is required' };

  if (!value) {
    return errorMessage;
  } else {
    return {};
  }
};
export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errorMessage = { email: 'Please enter a valid email address' };

  if (!emailRegex.test(email)) {
    return errorMessage;
  } else {
    return {};
  }
};

export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}$/;
  const errorMessage = { password: 'Please enter a valid password' };

  if (!passwordRegex.test(password)) {
    return errorMessage;
  } else {
    return {};
  }
};
