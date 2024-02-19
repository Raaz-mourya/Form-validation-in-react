import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
    country: "",
    age: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "It's length should be grater than or equal to 8!",
      pattern: "[a-zA-Z0-9!@#$%^&*]{8,20}",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "It is required!",
      pattern: "^[A-Za-z]{1,}",
      required: true,
    },
    {
      id: 4,
      name: "country",
      type: "text",
      placeholder: "Country",
      label: "Country",
      errorMessage: "It is required!",
      required: true,
    },
    {
      id: 5,
      name: "age",
      type: "text",
      placeholder: "Age",
      label: "Age",
      errorMessage: "It should be greater than 0",
      required: true,
    },
  ];

  const [disable, setDisable] = useState("typing");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setDisable("submitted");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const isPassValid = () => {
    return values.password.length >= 8 ? true : false;
  };

  const isEmailValid = () => {
    if (
      values.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return true;
    }
    return false;
  };

  console.log(values);

  return (
    <div className='app'>
      <form
        action=''
        method='POST'
        className='mt-4 mb-4'
        onSubmit={handleSubmit}
        autoComplete='off'
        id='form-signup'
      >
        <h1 className='text-center'>React Form with Validation</h1>
        <h1 className='text-center'>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button
          id='signUpBtn'
          className='btn btn-primary '
          disabled={
            !(isPassValid() && isEmailValid()) || disable === "submitted"
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
