import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { NavLink } from "react-router-dom";

import Search from './Search';

import PersonIcon from '@mui/icons-material/Person';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import OpacityIcon from '@mui/icons-material/Opacity';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TerminalIcon from '@mui/icons-material/Terminal';

export const Header = () => {

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

        <NavLink to="faucet/">
          <AccountBalanceWalletIcon fontSize="medium" sx={{ display: 'inline-flex', mb: '-5px', mr: '3px' }} />
          Wallet
        </NavLink>
      </Box>

      <Box width="30%" display="inline-block">
        <Search />
      </Box>

    </div>

    <div id="submenu">
      <NavLink to="settings/">
        <SettingsIcon fontSize="medium" sx={{ display: 'inline-flex', mb: '-3px' }} />
      </NavLink>
    </div>
    </>
  )

}