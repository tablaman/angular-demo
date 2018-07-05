import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Form, Icon, Input, Button, Alert } from 'antd';
import Yup from 'yup';

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type='email'
      name='email'
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
    />
    {touched.email && errors.email && <div>{errors.email}</div>}
    <input
      type='password'
      name='password'
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    />
    {touched.password && errors.password && <div>{errors.password}</div>}
    <button type='submit' disabled={isSubmitting}>
      Submit
    </button>
  </form>
);


const theForm = ({
  values,
  handleSubmit,
  errors,
  touched,
  isSubmitting,
  handleChange
}) => (
  // <Form onSubmit={handleSubmit}>
  //   <div>
  //     { touched.email && errors.email && <p>{errors.email}</p> }
  //     <Field type='email' name='email' placeholder='email' />
  //   </div>
  //   <div>
  //     { touched.password && errors.password && <p>{errors.password}</p> }
  //     <Field type='password' name='password' placeholder='password' />
  //   </div>
  //   <label>
  //     <Field type='checkbox' name='newsletter' checked={values.newsletter} />
  //     Join our newsletter
  //   </label>
  //   <Field component='select' name='plan'>
  //     <option value='free'>Free</option>
  //     <option value='premium'>Premium</option>
  //   </Field>
  //   <button disabled={isSubmitting}>Submit</button>
  // </Form>

  // Other method
  <Form onSubmit={handleSubmit}>
  {console.log(errors, touched)}
      <Form.Item validateStatus={touched.email && errors.email && errors.email ? 'error' : ''} help={errors.email}>
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} 
        placeholder='Username'
        type='email'
        name='email'
        value={values.email}
        onChange={handleChange} />
    </Form.Item>
      {touched.password && errors.password && <p>{errors.password}</p>}
    <Form.Item help={errors.password}>
      <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} 
        type='password' 
        placeholder='Password'
        name='password'
        value={values.password}
        onChange={handleChange} />
    </Form.Item>
    <Button
      type='primary'
      htmlType='submit'
      disabled={isSubmitting}>
      Submit
    </Button>
      
  </Form>
);


const AddUser = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || true,
      plan: plan || 'free'
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    password: Yup.string().min(5, 'Password must be 5 chars at least').required('Password is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === 'mw@test.io') {
        setErrors({ email: 'That email already taken' });
      } else {
        resetForm()
      }
      setSubmitting(false)
    }, 350);
  }


  // mapPropsToValues: props => ({ email: 'test' })
  // validationSchema: Yup.object().shape({
  //   email: Yup.string().email('Invalid email address').required('Email is required!'),
  //   username: Yup.string().required('This man needs a ${path}').when('email', (email, schema) => {
  //     if (email === 'foobar@example.com') {
  //       return schema.label('papidipupi').min(10);
  //     }
  //     return schema.label('babidibiba');
  //   }).test('is-zigzagging', '${path} is not zigzagging', value => value === 'zigzagging'),
  // }),
})(theForm);

export default AddUser;
