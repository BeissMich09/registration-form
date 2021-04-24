import {
  Button,
  CssBaseline,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import ModalWindow from "./ModalWindow";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "hidden",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    marginTop: "25px",
    marginBottom: "15px",
  },
  paper: {
    margin: theme.spacing(3, 10),
    height: "84%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form_email: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  form_password: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  form_full_name: {
    width: "80%",
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  text_error: {
    color: "red",
  },
  passwords: {
    display: "flex",
    justifyContent: "space-around",
  },
  full_name: {
    marginTop: "15px",
  },

  button: {
    background: "#d3b6f3",
    marginTop: "15px",
  },
}));

function SignUp(props) {
  const classes = useStyles();
  const {
    register: registerFullName,
    handleSubmit: handleSubmitFullName,
    formState: { errors: errorsFullName },
  } = useForm();
  const onSubmitFullName = (data) => {
    props.getInputFirstStep(data);
  };

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
  } = useForm();
  const onSubmitEmail = (data) => {
    props.getInputFirstStep(data);
  };
  const {
    watch: watchPassword,
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm();
  const onSubmitPassword = (data) => {
    props.getInputFirstStep(data);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography className={classes.title} component="h1" variant="h5">
            Registration
          </Typography>
          {props.registerData &&
          Object.keys(props.registerData).length > 3 ? null : (
            <form
              key="1"
              className={classes.form_full_name}
              onSubmit={handleSubmitFullName(onSubmitFullName)}
            >
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                error={errorsFullName.firstName}
                variant="outlined"
                label={
                  errorsFullName.firstName &&
                  errorsFullName.firstName.type === "required"
                    ? "First name is required"
                    : errorsFullName.firstName &&
                      errorsFullName.firstName.type === "minLength"
                    ? "Minimum of 3 symbols"
                    : errorsFullName.firstName &&
                      errorsFullName.firstName.type === "pattern"
                    ? "Latin, not a number"
                    : "First Name"
                }
                {...registerFullName("firstName", {
                  required: true,
                  minLength: 3,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />

              <TextField
                className={classes.full_name}
                error={errorsFullName.lastName}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                label={
                  errorsFullName.lastName &&
                  errorsFullName.lastName.type === "required"
                    ? "Last name is required"
                    : errorsFullName.lastName &&
                      errorsFullName.lastName.type === "minLength"
                    ? "Minimum of 3 symbols"
                    : errorsFullName.lastName &&
                      errorsFullName.lastName.type === "pattern"
                    ? "Latin, not a number"
                    : "Last Name"
                }
                {...registerFullName("lastName", {
                  required: true,
                  minLength: 3,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              <TextField
                className={classes.full_name}
                error={errorsFullName.patronymic}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                label={
                  errorsFullName.patronymic &&
                  errorsFullName.patronymic.type === "required"
                    ? "Patronymic is required"
                    : errorsFullName.patronymic &&
                      errorsFullName.patronymic.type === "minLength"
                    ? "Minimum of 3 symbols"
                    : errorsFullName.patronymic &&
                      errorsFullName.patronymic.type === "pattern"
                    ? "Latin, not a number"
                    : "Patronymic"
                }
                {...registerFullName("patronymic", {
                  required: true,
                  minLength: 3,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />

              <TextField
                className={classes.full_name}
                label={
                  errorsFullName.birthday &&
                  errorsFullName.birthday.type === "required"
                    ? "Birthday is required"
                    : "Birthday"
                }
                error={errorsFullName.birthday}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                {...registerFullName("birthday", { required: true })}
              />

              <Button className={classes.button} type="submit" value="submit">
                Next
              </Button>
            </form>
          )}
          {props.registerData &&
          Object.keys(props.registerData).length === 4 ? (
            <form
              className={classes.form_email}
              onSubmit={handleSubmitEmail(onSubmitEmail)}
              key="2"
            >
              <TextField
                className={classes.full_name}
                error={errorsEmail.email}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                label={
                  errorsEmail.email && errorsEmail.email.type === "required"
                    ? "Email is required"
                    : errorsEmail.email && errorsEmail.email.type === "pattern"
                    ? "Wrong email format"
                    : "Email"
                }
                {...registerEmail("email", {
                  required: true,
                  pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                })}
              />
              {props.registerData &&
              Object.keys(props.registerData).length > 4 ? null : (
                <Button className={classes.button} type="submit" value="submit">
                  Next
                </Button>
              )}
            </form>
          ) : null}
          {props.registerData && Object.keys(props.registerData).length > 4 ? (
            <form
              key="3"
              onSubmit={handleSubmitPassword(onSubmitPassword)}
              className={classes.form_password}
            >
              <TextField
                className={classes.full_name}
                error={errorsPassword.password}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                label={
                  errorsPassword.password &&
                  errorsPassword.password.type === "required"
                    ? "Password is required"
                    : errorsPassword.password &&
                      errorsPassword.password.type === "minLength"
                    ? "Min 6 simbols"
                    : "Password"
                }
                type="password"
                {...registerPassword("password", {
                  required: true,
                  minLength: 6,
                })}
              />

              <TextField
                className={classes.full_name}
                error={
                  errorsPassword.repassword ||
                  watchPassword("repassword") !== watchPassword("password")
                }
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                label={
                  errorsPassword.repassword &&
                  errorsPassword.repassword.type === "required"
                    ? "Confirm is required"
                    : errorsPassword.repassword &&
                      errorsPassword.repassword.type === "minLength"
                    ? "Min 6 simbols"
                    : watchPassword("repassword") !== watchPassword("password")
                    ? "Пароли не совпадают!"
                    : "Confirm password"
                }
                type="password"
                {...registerPassword("repassword", {
                  required: true,
                  minLength: 6,
                })}
              />
              <Button
                disabled={
                  watchPassword("repassword") !== watchPassword("password")
                    ? true
                    : false
                }
                className={classes.button}
                type="submit"
                value="submit"
              >
                Sign Up
              </Button>
            </form>
          ) : null}
          {props.registerData &&
          Object.keys(props.registerData).length === 7 ? (
            <ModalWindow registerData={props.registerData} />
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
}

export default SignUp;
