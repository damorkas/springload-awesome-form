import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Input from './Input';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders default <input>", () => {
    act(() => {
      render(<Input label='default_input' />, container);
    });
  
    expect(container.textContent).toBe("default_input");
    expect(container.getElementsByTagName('input')).toHaveLength(1);
  });

it("renders <input>", () => {
  const inputConfig = {
    id: 'email',
    elementType: 'input',
    label: 'Email'
  }

  act(() => {
    render(<Input 
        key={inputConfig.id} 
        label={inputConfig.label}
        elementType={inputConfig.elementType} />, container);
  });

  expect(container.textContent).toBe("Email");
  expect(container.getElementsByTagName('input')).toHaveLength(1);
});

it("renders <select>", () => {
    const inputConfig = {
        id: 'colour',
        elementType: 'select',
        elementConfig: {
            options: []
        },
        label: 'Colour'
    }
  
    act(() => {
      render(<Input 
          key={inputConfig.id} 
          label={inputConfig.label}
          elementType={inputConfig.elementType}
          elementConfig={inputConfig.elementConfig} />, container);
    });
  
    expect(container.textContent).toBe("Colour");
    expect(container.getElementsByTagName('select')).toHaveLength(1);
  });
