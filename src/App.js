import React from 'react';
import { Header } from './components/Header';
import { TestElementOne } from './components/TestElementOne';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
import {Routes, Route, Link, Router} from "react-router-dom";
import  { PageOne } from './PageOne';

import './App.css';

function App() {
  return (

      <GlobalProvider>

          <Header/>
          <Routes>
              <Route path="/pageOne" element={<PageOne />} />
          </Routes>
          <Link to="/pageOne">GoToPageOne</Link>

          <TestElementOne/>
          <div className="container">
              <Balance/>
              <IncomeExpenses/>
              <TransactionList/>
              <AddTransaction/>
          </div>
      </GlobalProvider>
  );
}

export default App;
