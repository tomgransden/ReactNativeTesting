/**
 * @format
 */

import 'react-native';
import React from 'react';
import {App} from '../App';

import {fireEvent, render, wait} from '@testing-library/react-native';

const baseProps = {
  handleSubmit: jest.fn(),
  setFieldValue: jest.fn(),
  values: {
    email: '',
    password: '',
  },
  errors: {},
  status: '',
};

const filledFormikProps = {
  ...baseProps,
  values: {
    email: 'MockUsername',
    password: 'MockPassword',
  },
};

const errorFormikProps = {
  ...baseProps,
  errors: {email: 'Mock email error message'},
};

const successFormikProps = {
  ...baseProps,
  values: {
    email: 'thomasg@123.com',
    password: 'Password123',
  },
  status: 'Success',
};

describe('App', () => {
  it('renders without crashing', () => {
    const {baseElement} = render(<App {...baseProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Renders form values correctly', () => {
    const {baseElement} = render(<App {...filledFormikProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Renders out errors correctly', () => {
    const {baseElement} = render(<App {...errorFormikProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Shows the success text when the form is submitted correctly', () => {
    const {baseElement} = render(<App {...successFormikProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should call setFieldValue when typing username', async () => {
    const {getByTestId} = render(<App {...baseProps} />);
    const username = getByTestId('Username');
    await wait(() => fireEvent.changeText(username, 'MockUsername'));
    expect(baseProps.setFieldValue).toBeCalledWith('email', 'MockUsername');
  });

  it('Should call handleSubmit when button is pressed', async () => {
    const {getByTestId} = render(<App {...baseProps} />);
    const submit = getByTestId('Submit');

    await wait(() => fireEvent.press(submit));
    expect(baseProps.handleSubmit).toBeCalled();
  });
});
