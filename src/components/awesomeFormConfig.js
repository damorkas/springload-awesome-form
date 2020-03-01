export const awesomeFormConfig = {
    email: {
        id: 'email',
        elementType: 'input',
        elementConfig: {
            type: 'text'
        },
        value: '',
        label: 'Email'
    },
    password: {
        id: 'password',
        elementType: 'input',
        elementConfig: {
            type: 'password'
        },
        value: '',
        label: 'Password'
    },
    colour: {
        id: 'colour',
        elementType: 'select',
        elementConfig: {
            options: [
                { value: '', displayValue: 'Choose colour' },
                { value: 'blue', displayValue: 'Blue' },
                { value: 'green', displayValue: 'Green' },
                { value: 'red', displayValue: 'Red' },
                { value: 'black', displayValue: 'Black' },
                { value: 'brown', displayValue: 'Brown' },
            ]
        },
        value: '',
        label: 'Colour'
    },
    animal: {
        id: 'animal',
        elementType: 'checkbox',
        elementConfig: {
            options: [
                { value: 'bear', displayValue: 'Bear' },
                { value: 'tiger', displayValue: 'Tiger' },
                { value: 'snake', displayValue: 'Snake' },
                { value: 'donkey', displayValue: 'Donkey' }
            ]
        },
        value: [],
        label: 'Animal'
    },
    tiger_type: {
        id: 'tiger_type',
        elementType: 'input',
        elementConfig: {
            type: 'text'
        },
        value: '',
        label: 'Type of tiger'
    }
};
