import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useLanguage from '@/locale/useLanguage';

import { Form, Button } from 'antd';

import { register as registerAction } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';
import RegisterForm from '@/forms/RegisterForm';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const RegisterPage = () => {
  const translate = useLanguage();
  const { isLoading, isSuccess } = useSelector(selectAuth);
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState('US');

  useEffect(() => {
    if (isSuccess) navigate('/login');
  }, [isSuccess]);

  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(
      registerAction({
        registerData: values,
      })
    );
  };

  const FormContainer = () => {
    return (
      <Loading isLoading={isLoading}>
        <Form
          layout="vertical"
          name="signup"
          className="login-form"
          initialValues={{
            remember: true,
            country: userLocation,
          }}
          onFinish={onFinish}
        >
          <RegisterForm userLocation={userLocation} />
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
              {translate('Register')}
            </Button>
            {translate('Or')} <a href="/login"> {translate('already have account Login')} </a>
          </Form.Item>
        </Form>
      </Loading>
    );
  };

  return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign Up" isForRegistre />;
};

export default RegisterPage;


