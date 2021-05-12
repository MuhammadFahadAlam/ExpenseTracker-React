import React, {useContext, useState} from 'react';
import '../App.css';
import {TransactionContext} from '../contexts/transactionContext';

function Main() {
	
	const {transactions, addTransaction} = useContext(TransactionContext);
	const [desc, setdesc] = useState("")
	const [amount, setamount] = useState(0)

	const handleAddition = (event) => {
		event.preventDefault();
		amount > 0 ?
		addTransaction({
			desc: desc,
			amount: amount
		})
		:
		alert('Enter Correct Value');

		setdesc('');
		setamount(0);
	}

	const getIncome = () => {
		let income = 0;
		transactions.forEach((transaction)=> {
			income = transaction.amount > 0 ? +(income + transaction.amount) : income;
		})
		return income;
	}

	const getExpense = () => {
		let expense = 0;
		transactions.forEach((transaction)=> {
			expense = transaction.amount < 0 ? +(expense - transaction.amount) : expense;
		})
		return expense;
	}

	return (
		<div className='container'>
			<h1 className='text-center'>Expense Tracker</h1>
			<h3>
				Your Balance <br /> ${getIncome() - getExpense()}
			</h3>
			<div className='expense-container'>
				<h3>
					Income <br /> ${getIncome()}
				</h3>
				<h3>
					Expense <br /> $-{getExpense()}
				</h3>
			</div>
			<h3>Histroy</h3>
			<hr />
			
			<ul className='transaction-list'>
				{transactions.map((transaction, index) => {
					return (
						<li key={index}>
							<span>{transaction.desc}</span>
							<span>${transaction.amount}</span>
						</li>
					);
				})}
			</ul>

			<h3>Add new transaction</h3>
			<hr />

			<form className='transaction-form' action='' onSubmit={handleAddition} >
				<label htmlFor=''>Enter Description</label>
				<br />
				<input type='text' value={desc} placeholder='Description' required onChange={(e) => setdesc(e.target.value)}/>
				<br />
				<label htmlFor=''>Enter Amount</label>
				<br />
				<input type='number' value={amount} placeholder='Amount' required onChange={(e) => setamount(e.target.value)}/>
				<br />
				<input type='submit' value='Add Transaction' />
				<p></p>
			</form>
		</div>
	);
}

export default Main;
