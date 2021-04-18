import React from "react";
import { connect } from "react-redux";
import SignUp from "./FormRegistartion";
import { getInput } from "./../../Redux/inputs-reducer";

class FormContainer extends React.Component {
  render() {
    return (
      <SignUp
        getInput={this.props.getInput}
        registerData={this.props.registerData}
      />
    );
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return { registerData: state.inputsReducer.registerData };
};
export default connect(mapStateToProps, { getInput })(FormContainer);
