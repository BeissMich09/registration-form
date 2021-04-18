import React from "react";
import { useForm } from "react-hook-form";

function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => props.getInput(data);

  let congratulationsWindow = () => {
    if (errors.length === 0) {
      console.log(
        `Поздравляем с успешной регистрацией, ${watch("firstName")}!`
      );
    }
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", {
          required: true,
          minLength: 3,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {console.log(watch("firstName"))}
      {errors.firstName !== undefined &&
        errors.firstName.type === "required" && <p>First name is required.</p>}
      {errors.firstName !== undefined &&
        errors.firstName.type === "minLength" && <p>Minimum of 3 symbols.</p>}
      {errors.firstName !== undefined &&
        errors.firstName.type === "pattern" && (
          <p>Latin letters, without numbers. </p>
        )}
      <input
        {...register("lastName", {
          required: true,
          minLength: 3,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.lastName !== undefined && errors.lastName.type === "required" && (
        <p>First name is required.</p>
      )}
      {errors.lastName !== undefined &&
        errors.lastName.type === "minLength" && <p>Minimum of 3 symbols.</p>}
      {errors.lastName !== undefined && errors.lastName.type === "pattern" && (
        <p>Latin letters, without numbers. </p>
      )}
      <input
        {...register("patronymic", {
          required: true,
          minLength: 3,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.patronymic !== undefined &&
        errors.patronymic.type === "required" && <p>First name is required.</p>}
      {errors.patronymic !== undefined &&
        errors.patronymic.type === "minLength" && <p>Minimum of 3 symbols.</p>}
      {errors.patronymic !== undefined &&
        errors.patronymic.type === "pattern" && (
          <p>Latin letters, without numbers. </p>
        )}
      <input type="date" {...register("birthday", { required: true })} />
      {errors.birthday && <p>Birthday name is required.</p>}
      <input
        {...register("email", {
          required: true,
          pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
        })}
      />
      {errors.email !== undefined && errors.email.type === "required" && (
        <p>Email name is required.</p>
      )}
      {errors.email !== undefined && errors.email.type === "pattern" && (
        <p>Wrong email format. Correct format: ivaninvaniv@mail.ru</p>
      )}
      <input
        type="password"
        {...register("password", { required: true, minLength: 6 })}
      />
      {errors.password && <p>Email name is required.</p>}
      <input
        type="password"
        {...register("repassword", { required: true, minLength: 6 })}
      />
      {watch("repassword") !== watch("password") && <p>Пароли не совпадают!</p>}
      <input
        onClick={() => {
          congratulationsWindow();
        }}
        type="submit"
        value="submit"
      />
    </form>
  );
}

export default SignUp;
