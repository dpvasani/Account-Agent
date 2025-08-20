import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { verify as verifyAction } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';

import { Result, Button } from 'antd';

import useLanguage from '@/locale/useLanguage';

const VerifyPage = () => {
  const translate = useLanguage();
  const { isSuccess } = useSelector(selectAuth);
  const navigate = useNavigate();
  const { userId, emailToken } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId && emailToken) {
      dispatch(
        verifyAction({
          userId,
          emailToken,
        })
      );
    }
  }, [userId, emailToken]);

  return (
    <Result
      status={isSuccess ? 'success' : 'info'}
      title={
        isSuccess
          ? translate('Email verified successfully')
          : translate('Verifying your email ...')
      }
      style={{ maxWidth: '450px', margin: '100px auto' }}
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate(`/login`);
          }}
        >
          {translate('Login')}
        </Button>
      }
    ></Result>
  );
};

export default VerifyPage;


