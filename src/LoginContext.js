import React, { createContext, useState } from 'react';

export const loginContextObj = createContext();

export const LoginProvider = ({ children }) => {
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginErr, setLoginErr] = useState(null);

  const handleUserLogin = (data) => {
    // Logic for logging in
    if (data.username === 'test' && data.password === 'password') {
      setUserLoginStatus(true);
      setCurrentUser({ username: data.username });
    } else {
      setLoginErr({ message: 'Invalid credentials' });
    }
  };

  return (
    <loginContextObj.Provider value={{ handleUserLogin, userLoginStatus, currentUser, loginErr }}>
      {children}
    </loginContextObj.Provider>
  );
};
