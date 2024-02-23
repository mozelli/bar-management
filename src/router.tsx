import { createBrowserRouter } from 'react-router-dom'

import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //   {
    //     path: '/',
    //     element: <Login />
    //   },
    //   {
    //     path: '/register',
    //     element: <Register />
    //   },
    //   {
    //     path: 'register/confirmation',
    //     element: <RegisterConfirmation />
    //   },
    //   {
    //     path: 'register/email-validation',
    //     element: <EmailValidation />
    //   },
    //   {
    //     path: 'register/email-not-validated',
    //     element: <EmailNotValidated />
    //   },
    //   {
    //     path: 'dashboard',
    //     element: <Dashboard />
    //   }
    // ]
  },  
]);

export { router }