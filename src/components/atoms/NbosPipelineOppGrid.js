import React from 'react';
import './aggrid.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function NbosPipelineOppGrid({
  opportunityDetail,
  top5,
  show5,
}) {
  return (
    <div
      className="ag-theme-material"
      style={{
        height: 400,
        minwidth: 1000,
        marginTop: 20,
      }}
    >
      <AgGridReact rowData={show5 ? top5 : opportunityDetail.opportunities}>
        <AgGridColumn
          field="client_name"
          headerName="Relationship"
        ></AgGridColumn>
        <AgGridColumn
          field="product_type"
          headerName="Product Type"
        ></AgGridColumn>
        <AgGridColumn
          field="sales_stage"
          headerName="Sales Stage"
        ></AgGridColumn>
        <AgGridColumn
          field="revenue"
          sort="desc"
          sortable={true}
        ></AgGridColumn>
        <AgGridColumn
          field="date_closed"
          headerName="Date Closed"
        ></AgGridColumn>
        <AgGridColumn field=""></AgGridColumn>
      </AgGridReact>
    </div>
  );
}

// highlight sorted colmn
