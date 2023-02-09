import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";

import Search from './Search';

import PersonIcon from '@mui/icons-material/Person';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import OpacityIcon from '@mui/icons-material/Opacity';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Header() {

  return (
    <>
    <div id="menu">

      <Box width="70%" display="inline-block">
        <NavLink to="accounts/">
          <PersonIcon fontSize="medium" sx={{ display: 'inline-flex', mb: '-5px', mr: '3px' }} />
          Accounts
        </NavLink>

        <NavLink to="blocks/">
          <WidgetsOutlinedIcon fontSize="medium" sx={{ display: 'inline-flex', mb: '-5px', mr: '3px' }} />
          Blocks
        </NavLink>

        <NavLink to="txs/">
          <AssignmentOutlinedIcon fontSize="medium" sx={{ display: 'inline-flex', mb: '-5px', mr: '3px' }} />
          Transactions
        </NavLink>

        <NavLink to="faucet/">
          <OpacityIcon fontSize="medium" sx={{ display: 'inline-flex', mb: '-5px', mr: '3px' }} />
          Faucet
        </NavLink>

        <NavLink to="logs/">
          <TerminalIcon fontSize="medium" sx={{ display: 'inline-flex', mb: '-5px', mr: '3px' }} />
          Logs
        </NavLink>

        <NavLink to="wallet/">
          <AccountBalanceWalletIcon fontSize="medium" sx={{ display: 'inline-flex', mb: '-5px', mr: '3px' }} />
          Wallet
        </NavLink>
      </Box>

      <Box width="30%" display="inline-block">
        <Search />
      </Box>

    </div>

    <div id="submenu">
      <Box width="70%" display="inline-block">
          <span>RPC Node: 127.0.0.1:8899</span>
          <span>Current epoch: 0</span>
          <span>Current blocks: 0</span>
          <span>Transactions total: 0</span>
      </Box>
      <Box width="30%" display="inline-block" textAlign={"center"}>
        <NavLink to="settings/">
          <SettingsIcon fontSize="medium" sx={{ mb: '-3px' }} />
        </NavLink>
      </Box>
    </div>
    </>
  )

}