import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import AccountListPage from './pages/accounts/AccountsListPage';
import BlockDetailsPage from './pages/blocks/BlockDetailsPage';
import BlockListPage  from './pages/blocks/BlockListPage';
import TransactionListPage from './pages/transactions/TransactionListPage';
import TransactionDetailsPage from './pages/transactions/TransactionDetailsPage';
import SettingsPage from './pages/settings';
import FaucetPage from './pages/faucet/FaucetPage';
import WalletPage from './pages/wallet/WalletPage';
import { ErrorPage } from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "accounts/",
        element: <AccountListPage />,
      },
      {
        path: "blocks/",
        element: <BlockListPage />,
      },
      {
        path: "blocks/:blockId",
        element: <BlockDetailsPage />,
      },
      {
        path: "txs/",
        element: <TransactionListPage />,
      },
      {
        path: "txs/:txId",
        element: <TransactionDetailsPage />,
      },
      {
        path: "faucet/",
        element: <FaucetPage />,
      },
      {
        path: "logs/",
        element: <BlockListPage />,
      },
      {
        path: "wallet/",
        element: <WalletPage />,
      },
      {
        path: "settings/",
        element: <SettingsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
