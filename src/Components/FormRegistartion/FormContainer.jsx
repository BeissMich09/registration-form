import React from "react";
import { connect } from "react-redux";
import SignUp from "./FormRegistartion";
import { getInputFirstStep } from "./../../Redux/inputs-reducer";
import style from "./FormContainer.module.css";

class FormContainer extends React.Component {
  render() {
    console.log(this.props.registerData);
    return (
      <div className={style.parent}>
        <SignUp
          getInputFirstStep={this.props.getInputFirstStep}
          registerData={this.props.registerData}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return { registerData: state.inputsReducer.registerData };
};
export default connect(mapStateToProps, { getInputFirstStep })(FormContainer);
