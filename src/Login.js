// import { React,useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useContext } from 'react';
// import { loginContextObj } from './LoginContext';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
  
//   const { handleUserLogin, userLoginStatus, currentUser, loginErr } = useContext(loginContextObj);
  
//   console.log(useContext(loginContextObj));
  
//   const navigate = useNavigate();

//   // Navigate to user profile upon successful login
//   useEffect(() => {
//     if (userLoginStatus === true) {
//       navigate(`/user-profile/${currentUser.username}`);
//     }
//   }, [userLoginStatus]);

//   return React.createElement(
//     'div',
//     null,
//     React.createElement('h2', null, 'Login'),
//     loginErr !== null &&
//       React.createElement('p', { className: 'text-warning text-center' }, loginErr.message),
//     React.createElement(
//       'form',
//       { className: 'w-50 mx-auto mt-5', onSubmit: handleSubmit(handleUserLogin) },
//       React.createElement(
//         'div',
//         { className: 'mb-3' },
//         React.createElement('label', { htmlFor: 'un', className: 'form-label' }, 'Username'),
//         React.createElement('input', {
//           type: 'text',
//           ...register('username'),
//           id: 'un',
//           className: 'form-control',
//         })
//       ),
//       React.createElement(
//         'div',
//         { className: 'mb-3' },
//         React.createElement('label', { htmlFor: 'pw', className: 'form-label' }, 'Password'),
//         React.createElement('input', {
//           type: 'password',
//           ...register('password'),
//           id: 'pw',
//           className: 'form-control',
//         })
//       ),
//       React.createElement(
//         'button',
//         { className: 'btn btn-success d-block mx-auto', type: 'submit' },
//         'Login'
//       )
//     )
//   );
// }

// export default Login;
