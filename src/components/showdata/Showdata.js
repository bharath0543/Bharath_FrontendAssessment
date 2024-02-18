import React, { useState } from "react";
import "./Showdata.css";

const Showdata = ({
  data,
  searchdata,
  selectedStatusOption,
  selectedOption,
}) => {
  const [selectedShowOption, setSelectedShowOption] = useState("All Columns");
  const [data2, setData2] = [];
  const itemsPerPage = 5;
  const lesser = ">";
  const greater = "<";
  const [selectedIds, setSelectedIds] = useState([]);
  const handleCheckboxChange = (id) => {
    const updatedSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id];

    setSelectedIds(updatedSelectedIds);
  };

  const handleSelectedDispatch = () => {
    // Perform actions with selectedIds, e.g., dispatch to a store, send to server, etc.
    console.log("Selected IDs:", selectedIds);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get the objects for the current page
  const currentdata = data.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSelectionShowChange = (e) => {
    // column selection
    setSelectedShowOption(e.target.value);
  };

  const filterData = () => {
    if (selectedStatusOption === "all") {
      // If input is "all", return the entire data
      return currentdata;
    } else {
      // Otherwise, filter data based on the input status
      return currentdata.filter((item) => item.status === selectedStatusOption);
    }
  };

  const filteringData = () => {
    // categoty
    if (selectedOption === "all") {
      // If input is "all", return the entire data
      return filteredData;
    } else {
      // Otherwise, filter data based on the input status
      return filteredData.filter((item) => item.category === selectedOption);
    }
  };

  const filteredData = filterData();
  const filteredData2 = filteringData(); // category filtering

  return (
    <div className="container">
      <div className="secondbox">
        <div className="products">
          <h3>Products Summary</h3>
        </div>

        <div className="column">
          <div className="column-text">
            <h4>Show</h4>
          </div>
          <div className="column-search">
            <select
              value={selectedShowOption}
              onChange={handleSelectionShowChange}
            >
              <option value="3">3</option>
              <option value="All Columns">All Columns</option>
            </select>
          </div>
        </div>

        <div className="dispatch">
          <button
            onClick={handleSelectedDispatch}
            disabled={selectedIds.length === 0} // Disable button if no checkboxes are selected
            className={selectedIds.length > 0 ? 'active' : ''} 
          >
             Dispatch Selected
          </button>
        </div>

        {/* Display pagination numbers with active class */}
        <div className="pagination-container">
          {/* Previous page button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {greater}
          </button>

          {/* Pagination numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}

          {/* Next page button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {lesser}
          </button>
        </div>
      </div>
      <div className="tabledata">
        {selectedShowOption === "All Columns" && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Shipify</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredData2.map((submission, index) => (
                  <tr key={submission.id}>
                    
                    <td >
                    <div className="checkbox-input">
                        <div>  <input
                          type="checkbox"
                          checked={selectedIds.includes(submission.id)}
                          onChange={() => handleCheckboxChange(submission.id)}
                        /></div>

                       <div>{submission.id}</div>
                       </div>
                      
                      </td>
                    
                    
                    <td>{submission.shipify}</td>
                    <td>{submission.status}</td>
                    <td>{submission.date}</td>
                    <td>{submission.customer}</td>
                    <td>{submission.email}</td>
                    <td>{submission.country}</td>
                    <td>{submission.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div>
        {selectedShowOption === "3" && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Status</th>

                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredData2.map((submission, index) => (
                  <tr key={submission.id}>
                   <td >
                    <div className="checkbox-input">
                        <div>  <input
                          type="checkbox"
                          checked={selectedIds.includes(submission.id)}
                          onChange={() => handleCheckboxChange(submission.id)}
                        /></div>

                       <div>{submission.id}</div>
                       </div>
                      
                      </td>

                    <td>{submission.status}</td>

                    <td>{submission.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showdata;
