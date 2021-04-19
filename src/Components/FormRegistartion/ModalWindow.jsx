import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  window: {
    position: "absolute",
    top: "39%",
    zIndex: "5",

    border: "solid #d0a3ff 3px",
    height: "150px",
    width: "530px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    borderRadius: "20px",
    background: "#efe0ff",
  },
}));

const ModalWindow = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.window}>
      <Typography component="h1" variant="h5">
        Поздравляем с успешной регистрацией!
      </Typography>

      <div>
        Вас зовут - {props.registerData.firstName}{" "}
        {props.registerData.patronymic} {props.registerData.lastName}
      </div>
      <div>Дата рождения: {props.registerData.birthday}</div>
      <div>Почта: {props.registerData.email}</div>
    </div>
  );
};

export default ModalWindow;
