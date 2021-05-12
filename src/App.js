import './App.css';
import Main from './components/Main';
import {TransactionContext, TransactionProvider} from './contexts/transactionContext'

function App() {
	return (
		<TransactionProvider>
			<Main />
		</TransactionProvider>
	);
}

export default App;
