import React from 'react';
import {mount} from 'enzyme';
import LoginForm from '../../components/LoginForm';
import '../../setupTests';

// to fix testcafe + jest type collision
declare const test: jest.It;

describe('<LoginForm />', () => {
  const form = mount(<LoginForm />);

  test('Render Login Form', () => {
    expect(form.length).toEqual(1);
  });

  test('Form title render', () => {
    expect(form.find('h1').text()).toEqual('Iniciar sesión');
  });

  test('Render email input', () => {
    expect(form.find('input[name="email"]').length).toEqual(1);
  });

  test('Render password input', () => {
    expect(form.find('input[name="password"]').length).toEqual(1);
  });

  test('Render submit button', () => {
    expect(form.find('button[type="submit"]').length).toEqual(1);
  });
});
