import React, {useState} from 'react';
//exportar o auth pra poder utilizar
export const AuthContext = React.createContext({});

//exportar nosso provider
export const AuthProvider = props => {
  const [tokenAuth, setTokenAuth] = useState('');  

  return (
    <AuthContext.Provider value={{tokenAuth, setTokenAuth}}>
      {props.children}
    </AuthContext.Provider> //retorna o context e passa o valor que a egnte quer pasasr
  );
};
