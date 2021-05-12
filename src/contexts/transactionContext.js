import React, { createContext, useReducer } from 'react';
import TransactionReducer from '../reducers/transactionReducer';

const initialTransactions = [
    { amount: 100, desc: 'Cash' },
    { amount: -40, desc: 'Book' },
    { amount: -20, desc: 'Food' },
];

export const TransactionContext = createContext(initialTransactions)

export const TransactionProvider = ({children}) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transaction){
        dispatch({type: 'ADD', payload: {
            amount: transaction.amount,
            desc: transaction.desc
        }})
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

