import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };
  return (
    <div>
      <h1>Login Form</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">firstname</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          {...register("firstname", {
            required: "Enter fisrtname",
            minLength: { value: 5, message: "Enter minimum 5" },
          })}
        />
        {
            errors.firstname&&(<p>{errors.firstname.message}</p>)
        }
        <br />
        <label htmlFor="">lastname</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          {...register("lastname", { required: "enter secondname" ,pattern:{value:/^[0-9]+$/i ,message:'doest not match'}})}
        />
        {
            errors.lastname&&(<p>{errors.lastname.message}</p>)
        }
        <br />
        <input type="submit" disabled={isSubmitting} />
      </form>
    </div>
  );
};

export default Login;
