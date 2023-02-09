
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import { Transaction } from './types';
import { minimizeStr } from '../../utils/helper';

export default function TransactionListPage() {

  let dummyData:Array<Transaction> = [
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804030", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804031", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804032", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804033", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804034", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804035", status: false, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804036", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804037", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804038", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804039", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804040", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
    {signature: "s2Khf7AuK8VDiiY65fnVPNg5FTjtUNb5YgEMF2jrsaskF5aELiPqfZmPUKydvWM4Augjoy3kmp72dnK9tAwyc", block:"76804041", status: true, timestamp:"February 09, 2023 03:27:13 +UTC", instructions:"Vote", fee:0},
  ];

  return (
    <>
      {/* <h2>Transaction list</h2> */}

      {dummyData && (
        <TableContainer>

          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell align="left">Tx signature</TableCell>
                <TableCell align="left">Block heigth</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Timestamp</TableCell>
                <TableCell align="center">Instructions</TableCell>
                <TableCell align="center">Fee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((item) => (
                <TableRow hover >
                  <TableCell align="left">
                    {minimizeStr(item.signature, 20, 20)}
                  </TableCell>

                  <TableCell align="left">
                    {item.block}
                  </TableCell>

                  <TableCell align="center">
                      {item.status
                      ?
                      <TaskAltIcon fontSize='small' color="success" sx={{ mb: -0.3 }} />
                      :
                      <CancelIcon fontSize='small' color="error" sx={{ mb: -0.3 }} />}
                  </TableCell>

                  <TableCell align="center">
                    {item.timestamp}
                  </TableCell>

                  <TableCell align="center">
                    {item.instructions}
                  </TableCell>

                  <TableCell align="center">
                    {item.fee}
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>

        </TableContainer>
      )}
    </>
  )

}