import React, { useMemo, useState, useEffect } from "react";

import Table from "./Component/table";

function App() {

  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        
        // First group columns
        columns: [
          {
            Header: "Mobile",
            accessor: "show.mobile"
          },
          {
            Header: "Id",
            accessor: "show.id"
          },
          {
            Header: "Earning",
            accessor: "show.earning"
          },
          {
            Header: "Action",
            accessor: "show.action"
          }
        ]
      },
      
    ],
    [] //put the data into the cells in this array []
  );



  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;