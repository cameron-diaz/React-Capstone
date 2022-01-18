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
import './gridStyles.css';

export default function NbosPipelineOppGrid({
  opportunityDetail,
  top5,
  show5,
}) {
  const formatter = a => {
    const date =
      a.value !== undefined ? format(new Date(a.value), 'yyyy/MM/dd') : '';
    return date;
  };

  const cellStyle = {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  };

  const detailStyle = {
    color: 'blue',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  };

  const defaultColDef = {
    headerClass: 'header-class',
  };

  return (
    <div
      className="ag-theme-material"
      style={{
        height: 500,
        minwidth: 800,
        marginTop: 20,
      }}
    >
      <AgGridReact
        pagination={true}
        paginationAutoPageSize={true}
        rowHeight={70}
        defaultColDef={defaultColDef}
        rowData={show5 ? top5 : opportunityDetail.opportunities}
        style={{ width: '100%', height: '100%;' }}
      >
        <AgGridColumn
          field="client_name"
          headerName="Relationship"
          sortable={true}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          field="product_type"
          headerName="Product Type"
          sortable={true}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          field="sales_stage"
          headerName="Sales Stage"
          sortable={true}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          field="revenue"
          sort="desc"
          sortable={true}
          valueFormatter={a => {
            return formattingGridValues(a.value);
          }}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          field="date_closed"
          headerName="Date Closed"
          valueFormatter={formatter}
          sortable={true}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          field="details"
          headerName=""
          cellStyle={detailStyle}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
}

// highlight sorted colmn
