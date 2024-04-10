import React from "react";
import data from "../data.json";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
// import { Link } from "react-router-dom";



const columns = [
  {
    field: "SNO",
    headerName: "S_No",
    width: 70,
    headerClassName: "custom-header",
    headerAlign: "center",
  },
  {
    field: "ProductName",
    headerName: "ProductName",
    width: 300,
    headerClassName: "custom-header",
    headerAlign: "center",
  },
  {
    field: "Brand",
    headerName: "Brands",
    width: 180,
    headerClassName: "custom-header",
    headerAlign: "center",
  },
  {
    field: "Colour",
    headerName: "Colour",
    width: 180,
    headerClassName: "custom-header",
    headerAlign: "center",
  },
  {
    field: "Price",
    headerName: "Price",
    width: 160,
    headerClassName: "custom-header",
    headerAlign: " center",
  },
  {
    field: "Quantity",
    headerName: "Quantity",
    width: 140,
    headerClassName: "custom-header",
    headerAlign: " center",
  },
];

const TableForm = () => {
  const alldata = data;
  console.log("all", alldata);

  const prepareDownload = () => {
    const csvHeaders = columns.map((column) => column.headerName);
    const csvRows = [csvHeaders.join(",")];
  
    csvRows.push(...alldata.map((row) => Object.values(row).join(",")));
  
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "stocks.csv");
    document.body.appendChild(link);
    link.click();
  };



  return (
    <>
      <h2 className=" text-center ml-10">Table </h2>
      <div
        style={{
          height: 500,
          width: "90%",
          overflow: "auto",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      
      >
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,

            borderColor: "primary.light",
            "& .custom-header": {
              fontSize: 18,
              color: "blue",
            },
            "& .MuiDataGrid-root, .MuiDataGrid-root ": {
              backgroundColor: "primary.main",
              color: "black",
            },
            "& .MuiDataGrid-colCell,  .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
            ".MuiDataGrid-cell": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          rows={alldata}
          columns={columns}
          getRowId={(row) => row?.SNO}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          pageSizeOptions={[5, 15]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        <Button
          onClick={prepareDownload}
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
        >
          Download Stocks
        </Button>
      </div>
    </>
  );
};

export default TableForm;
