/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import {withFormik} from 'formik';

export const App = ({values, setFieldValue, errors, handleSubmit, status}) => {
  return (
    <SafeAreaView style={styles.container}>
      {status !== 'Success' ? (
        <>
          <Text style={styles.header}>Sample formik app</Text>
          <TextInput
            style={styles.usernameField}
            onChangeText={text => setFieldValue('email', text)}
            value={values.email}
            placeholder={'Username'}
            testID={'Username'}
          />
          <TextInput
            style={styles.usernameField}
            onChangeText={text => setFieldValue('password', text)}
            value={values.password}
            secureTextEntry={true}
            placeholder={'Password'}
            testID={'Password'}
          />
          {Object.keys(errors).length > 0 && (
            <View testID={'ErrorContainer'} style={styles.errorBackground}>
              <Text>{errors.email}</Text>
            </View>
          )}
          <Button
            testID={'Submit'}
            style={styles.submit}
            onPress={handleSubmit}
            title={'Submit'}
          />
        </>
      ) : (
        <Text testID={'Sucesss'}>Success</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  header: {
    fontSize: 32,
  },
  usernameField: {
    fontSize: 24,
    height: 56,
    backgroundColor: 'white',
    marginTop: 12,
  },
  errorBackground: {
    marginTop: 12,
    backgroundColor: 'red',
    height: 56,
  },
  submit: {
    marginTop: 12,
  },
});

const form = withFormik({
  displayName: 'DemoApp',
  mapPropsToValues: () => ({email: '', password: ''}),
  handleSubmit: (values, {setErrors, setStatus}) => {
    if (values.email === '' || values.password === '') {
      setErrors({email: 'Username and password are required'});
    } else {
      setStatus('Success');
    }
  },
});

export default form(App);
