import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
    getAllAccountsCreditDebit,
} from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import CreDebDisplay from '@openbanking/ui-common/lib/CreDebDisplay'
import './Accounts.css'



//accounts api list
const Accounts = () => {
    const data = useSelector((state) => state.app.data)
    const accountId = useSelector((state) => state.account.accountId)

    const dispatch = useDispatch()

    return (
        <div className="mainContainer">
            <h2 className="pageTitle"></h2>
            <div className="apiContainer">
                <div className="btnContainer">

                <button
                        className="buttonLinks"
                        onClick={() => getAllAccountsCreditDebit(dispatch)}
                    >
                        XtraSaving
                    </button>
             
                </div>
                
                                <div>
                                    <CreDebDisplay data ={data}/>
                                </div>
                
            </div>
        </div>
    )
}

export default Accounts
