import React from 'react';
import './aggrid.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { formattingGridValues } from '../../utilities';
// import { parse } from 'date-fns';
// import { enUS } from 'date-fns/locale';
import format from 'date-fns/format';
// import { formattingDates } from '../../utilities';

export default function NbosPipelineOppGrid({
  opportunityDetail,
  top5,
  show5,
}) {
  console.log(new Date('2021-01-26T08:53:59Z'));
  const formatter = a => {
    const date =
      a.value !== undefined ? format(new Date(a.value), 'yyyy/MM/dd') : '';
    return date;
  };

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
          valueFormatter={a => {
            return formattingGridValues(a.value);
          }}
        ></AgGridColumn>
        <AgGridColumn
          field="date_closed"
          headerName="Date Closed"
          valueFormatter={formatter}
        ></AgGridColumn>
        <AgGridColumn field=""></AgGridColumn>
      </AgGridReact>
    </div>
  );
}

// highlight sorted colmn
