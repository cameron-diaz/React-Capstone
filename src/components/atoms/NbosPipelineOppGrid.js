import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function NbosPipelineOppGrid() {
  const rowData = [
    {
      relationship: `Relationship 1`,
      product: 'loan',
      sales: 'Opportunity',
      revenue: '$4.81 MM',
      date: '1/1/2021',
      details: 'Details',
    },
    {
      relationship: 'Relationship 2',
      product: 'Lease',
      sales: 'Proposal',
      revenue: '$5.67 MM',
      date: '2/1/2021',
      details: 'Details',
    },
    {
      headerName: 'Relationship',
      relationship: 'Relationship 3',
      product: 'Term Loan',
      sales: 'Pending',
      revenue: '$4.81 MM',
      date: '2/1/2021',
      details: 'Details',
    },
    {
      relationship: 'Relationship 4',
      product: 'Revolving Credit',
      sales: 'Pending',
      revenue: '$3.78 MM',
      date: '2/1/2021',
      details: 'Details',
    },
    {
      relationship: 'Relationship 5',
      product: 'Line of Credit',
      sales: 'Commitment',
      revenue: '$3.78 MM',
      date: '5/2/2021',
      details: 'Details',
    },
  ];
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 400, minwidth: 1000, marginTop: 20 }}
    >
      <AgGridReact rowData={rowData}>
        <AgGridColumn field="relationship"></AgGridColumn>
        <AgGridColumn field="product"></AgGridColumn>
        <AgGridColumn field="sales"></AgGridColumn>
        <AgGridColumn field="revenue"></AgGridColumn>
        <AgGridColumn field="date"></AgGridColumn>
        <AgGridColumn field="details"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}
