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
import  { PageTwo } from './PageTwo';

import  { UserController } from './UserController';
import  { InitialController } from './Initial Controller';
import  { EmailController } from './EmailController';
import  { DefaultController } from './DefaultController';
import  { AuthController } from './AuthController';

import './App.css';

function App() {
  return (

      <GlobalProvider>

          <Link to="/userController">GoToUserController</Link>
          <br/>
          <Link to="/initialController">GoToInitialController</Link>
          <br/>
          <Link to="/emailController">GoToEmailController</Link>
          <br/>
          <Link to="/defaultController">GoToDefaultController</Link>
          <br/>
          <Link to="/authController">GoToAuthController</Link>
          <br/>
          <Link to="/">GoToMainPage</Link>


          <Routes>
              <Route path="/userController" element={<UserController/>}/>
              <Route path="/initialController" element={<InitialController/>}/>
              <Route path="/emailController" element={<EmailController/>}/>
              <Route path="/defaultController" element={<DefaultController/>}/>
              <Route path="/authController" element={<AuthController/>}/>
              <Route path="/mainPage" element={<App/>}/>
          </Routes>


      </GlobalProvider>
  );
}

export default App;
