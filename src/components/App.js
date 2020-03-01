import React, { Component } from 'react';
import { isEmail } from 'validator';
import Input from './Input';
import { awesomeFormConfig } from './awesomeFormConfig';

class App extends Component {
  state = {
    awesomeForm: awesomeFormConfig,
    formErrors: []
  }

  isValid(value, id) {
    let isValid = true;

    switch (id) {
      /**
       * Email must be a valid email address.
       */
      case ('email'):
        isValid = value && isEmail(value); 
        break;
      /**
       * Password must be longer than 8 characters.
       */
      case ('password'):
        isValid = value && value.length > 8;
        break;
      /**
       * Colour must be selected.
       */
      case ('colour'):
        isValid = value ? true : false;
        break;
      /**
       * At least two Animals must be chosen
       */
      case ('animal'):
        isValid = value && value.length >= 2;
        break;
      /**
       * If Tiger is one of the chosen Animals then Type of tiger is required to be a non-empty string.
       */
      case ('tiger_type'):
        isValid = this.state.awesomeForm['animal'].value.includes('tiger') && !value ? false : true;
        break;
      default:
        break;
    }

    return isValid;
  }

  inputChangedHandler = (event, id) => {
    const formUpdated = {
      ...this.state.awesomeForm
    };
    // spread operator do not deep copy, so we need to copy inner object
    const formElementUpdated = {
      ...formUpdated[id]
    };

    if (event.target.type === 'checkbox') {
      event.target.checked ?
        formElementUpdated.value.push(event.target.value) :
        formElementUpdated.value = formElementUpdated.value.filter((value) => value !== event.target.value);
    } else {
      formElementUpdated.value = event.target.value;
    }

    if (this.state.formErrors.includes(id)) {
      const formErrorsUpdated = this.state.formErrors.filter((value) => value !== id);
      this.setState({ formErrors: formErrorsUpdated });
    }

    formUpdated[id] = formElementUpdated;
    this.setState({ awesomeForm: formUpdated });
  }

  isFormFieldValid(id) {
    return !this.state.formErrors.includes(id);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const formData = {};
    let formErrorsUpdated = [];
    for (let id in this.state.awesomeForm) {
      formData[id] = this.state.awesomeForm[id].value;
      this.isValid(formData[id], id) || formErrorsUpdated.push(id);
    }

    this.setState({ formErrors: formErrorsUpdated });

    // TODO further actions
    if (formErrorsUpdated.length > 0) {
      console.log('Form have errors.', formErrorsUpdated);
    } else {
      console.log('Form submited!');
    } 

    console.table(formData);
  }

  render() {
    const form = this.state.awesomeForm;

    const generateInput = (id) => {
      const { value, label, elementType, elementConfig } = form[id];
      return (
        <Input
          key={id}
          value={value}
          label={label}
          isValid={this.isFormFieldValid(id)}
          elementType={elementType}
          elementConfig={elementConfig}
          changed={(event) => this.inputChangedHandler(event, id)}
        />
      );
    }

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h1>Fill out this awesome form</h1>

          <fieldset>
            <h3>Your details</h3>
            {generateInput(form.email.id)}
            {generateInput(form.password.id)}
          </fieldset>

          <fieldset>
            <h3>Your animal</h3>
            {generateInput(form.colour.id)}
            {generateInput(form.animal.id)}
            {generateInput(form.tiger_type.id)}
          </fieldset>

          <fieldset>
            <p>
              <input type='submit' value='Create account' />
            </p>
          </fieldset>

        </form>
      </div>
    );
  }
}

export default App;
