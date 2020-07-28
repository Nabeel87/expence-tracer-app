import React from 'react';
import {Header} from './componenets/Header';
import {Balance} from './componenets/Balance';
import {IncomeExpenses} from './componenets/IncomeExpenses';
import {TransactionList} from './componenets/TransactionList';
import {AddTransaction} from './componenets/AddTransaction';
import {Footer} from './componenets/Footer';

import {GlobalProvider} from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      <Footer/>
    </GlobalProvider>
  );
}

export default App;
