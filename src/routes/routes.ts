
import { lazy, LazyExoticComponent } from 'react';
import { LoginPage } from '../pages/LoginPage';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const AuthPage = lazy(() => import(/* webpackChunkName: "AuthPage"*/'../pages/Auth'));
const NoAuthPage = lazy(() => import(/* webpackChunkName: "NoAuthPage"*/'../pages/NoAuth'));

export const routes: Route[] = [
  {
    to: '/login',
    path: 'login',
    Component: LoginPage,
    name: 'Login'
  },
  {
    to: '/auth',
    path: 'auth',
    Component: AuthPage,
    name: 'Auth'
  },
  {
    to: '/noAuth',
    path: 'no-auth',
    Component: NoAuthPage,
    name: 'NoAuth'
  },
];
