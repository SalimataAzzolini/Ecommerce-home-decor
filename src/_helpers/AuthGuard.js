import React from 'react';
import { Navigate } from 'react-router-dom';
import { accountService } from '@/_services/account.service';


const AuthGuard = ({children}) => {

    /*  si on est pas logge on donne l'instruction au router de naviguer vers login si pas connecter sinon on renvoie les routes enfants de user*/
if(!accountService.isLogged()){
        return <Navigate to="/auth/login" />
    }
    return children;
};

export default AuthGuard;