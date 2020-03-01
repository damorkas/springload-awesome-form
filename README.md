* Initial task [form-validation-problem](https://github.com/springload/form-validation-problem).

##  Done

*  Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
*  Implemented given form in React framework.
*  Added necessary validations as per requirements.
*  After form has been submitted, status and data are shown in console tab.
*  Wrote a few unit tests for the components.
*  Application is deployed on Heroku with CI/CD integration [SpringloadAwesomeForm](https://springload-awesome-form.herokuapp.com).

##  TODO

*  Add `TypeScript` to the project. At this stage it seemed like an overkill to use it but thinking about bigger scope applications I would use `TypeScript`.
*  Write more reliable tests for generating components and form validation logic. Also, maybe include `snapshot` testing with `Jest` or simillar libraries.
*  Think more about handling errors for better user experience:
	* does error handling need to be on input change or on form submit;
	* does error message need to be added near input or show notifications;
	* does error message need to be removed when trying to fix error;
	* how different components(`input`, `select`, `checkbox`) need to be styled;
*  Add husky pre-commit hooks for linting the application before pushing code to repository. 
