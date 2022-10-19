import axios from 'axios';
import React, {useEffect, useState, useContext} from 'react';
import Accounts from '../components/Accounts';
import SessionContext from '../contexts/SessionContext';

const BankPage = () => {
    const {sessionKey, saveSession} = useContext(SessionContext);
    const [accountData, setAccountData] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/api/accounts/?key="+sessionKey)
            .then((response) => {
                setAccountData(response.data);
            }).catch((error) => {
                saveSession();
            });
    }, []);
    return(
        accountData ? <Accounts accountData={accountData} /> : <div />
    )
};

export default BankPage;