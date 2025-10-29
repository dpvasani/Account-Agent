import { useLayoutEffect } from 'react';
import { useEffect, useState } from 'react';
import { selectAppSettings } from '@/redux/settings/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'antd';

import { useAppContext } from '@/context/appContext';

import Navigation from '@/apps/Navigation/NavigationContainer';

import HeaderContent from '@/apps/Header/HeaderContainer';
import PageLoader from '@/components/PageLoader';

import { settingsAction } from '@/redux/settings/actions';

import { selectSettings } from '@/redux/settings/selectors';

import AppRouter from '@/router/AppRouter';

import useResponsive from '@/hooks/useResponsive';

import storePersist from '@/redux/storePersist';

export default function ErpCrmApp() {
  const { Content } = Layout;
  const [loadTimeout, setLoadTimeout] = useState(false);

  // const { state: stateApp, appContextAction } = useAppContext();
  // // const { app } = appContextAction;
  // const { isNavMenuClose, currentApp } = stateApp;

  const { isMobile } = useResponsive();

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(settingsAction.list({ entity: 'setting' }));
    
    // Set a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      setLoadTimeout(true);
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timeout);
  }, []);

  // const appSettings = useSelector(selectAppSettings);

  const { isSuccess: settingIsloaded, isLoading } = useSelector(selectSettings);

  // useEffect(() => {
  //   const { loadDefaultLang } = storePersist.get('firstVisit');
  //   if (appSettings.idurar_app_language && !loadDefaultLang) {
  //     window.localStorage.setItem('firstVisit', JSON.stringify({ loadDefaultLang: true }));
  //   }
  // }, [appSettings]);

  // Show loading only while actively loading, not on failure
  // Also prevent infinite loading with timeout
  if (!settingIsloaded && isLoading && !loadTimeout) {
    return <PageLoader />;
  }

  // If settings loaded successfully, render the app
  if (settingIsloaded) {
    return (
      <Layout hasSider>
        <Navigation />

        {isMobile ? (
          <Layout style={{ marginLeft: 0 }}>
            <HeaderContent />
            <Content
              style={{
                margin: '40px auto 30px',
                overflow: 'initial',
                width: '100%',
                padding: '0 25px',
                maxWidth: 'none',
              }}
            >
              <AppRouter />
            </Content>
          </Layout>
        ) : (
          <Layout>
            <HeaderContent />
            <Content
              style={{
                margin: '40px auto 30px',
                overflow: 'initial',
                width: '100%',
                padding: '0 50px',
                maxWidth: 1400,
              }}
            >
              <AppRouter />
            </Content>
          </Layout>
        )}
      </Layout>
    );
  }

  // If settings failed to load and not loading, still show the app
  // This prevents infinite loading if there's an error
  return (
    <Layout hasSider>
      <Navigation />
      {isMobile ? (
        <Layout style={{ marginLeft: 0 }}>
          <HeaderContent />
          <Content
            style={{
              margin: '40px auto 30px',
              overflow: 'initial',
              width: '100%',
              padding: '0 25px',
              maxWidth: 'none',
            }}
          >
            <AppRouter />
          </Content>
        </Layout>
      ) : (
        <Layout>
          <HeaderContent />
          <Content
            style={{
              margin: '40px auto 30px',
              overflow: 'initial',
              width: '100%',
              padding: '0 50px',
              maxWidth: 1400,
            }}
          >
            <AppRouter />
          </Content>
        </Layout>
      )}
    </Layout>
  );
}
