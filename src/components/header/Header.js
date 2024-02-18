import { useState } from "react";
import "./Header.css";
import Showdata from "../showdata/Showdata";

const Header = () => {
  const [searchdata, setSearchInput] = useState(); // search input
  const [showForm, setShowForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState("all");
  const [selectedStatusOption, setSelectedStatusOption] = useState("all");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    

    if (!formData.id.trim()) {
      newErrors.name = "id is required";
    }

    if (!formData.customer.trim()) {
      newErrors.name = "customer is required";
    }
    if (!formData.email.trim()) {
      newErrors.name = "email is required";
    }
    if (!formData.country.trim()) {
      newErrors.name = "email is required";
    }

    if (!formData.shipify) {
      newErrors.shipify = "shipify is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const deleteform = () => { // to keep form visibility to none
    setShowForm(false);
  }

  const [formData, setFormData] = useState({
    id: "",
    shipify: "",
    status: "",
    date: "",
    customer: "",
    email: "",
    country: "",
    category: "",
  });

  const [data, setdata] = useState([
    {
      id: "123",
      shipify: "213",
      status: "pending",
      date: "17 02 2024",
      customer: "naresh",
      email: "bha@gmail.com",
      country: "ind",
      category: "phone",
    },
    {
      id: "13",
      shipify: "3",
      status: "active",
      date: "17 02 2024",
      customer: "sai",
      email: "bha@gmail.com",
      country: "usa",
      category: "laptop",
    },
    {
      id: "23",
      shipify: "21",
      status: "active",
      date: "17 02 2024",
      customer: "bharath",
      email: "bha@gmail.com",
      country: "usa",
      category: "phone",
    },
    {
      id: "1003",
      shipify: "1213",
      status: "pending",
      date: "17 02 2024",
      customer: "nitin",
      email: "bha@gmail.com",
      country: "ind",
      category: "laptop",
    },
    {
      id: "2113",
      shipify: "0233",
      status: "active",
      date: "17 02 2024",
      customer: "munni",
      email: "munni@gmail.com",
      country: "usa",
      category: "phone",
    },
    {
      id: "4013",
      shipify: "253",
      status: "pending",
      date: "17 02 2024",
      customer: "ranga",
      email: "ranga@gmail.com",
      country: "night",
      category: "phone",
    },
    {
      id: "8913",
      shipify: "358",
      status: "active",
      date: "17 02 2024",
      customer: "naresh",
      email: "naresh@gmail.com",
      country: "mexico",
      category: "laptop",
    },
    {
      id: "9813",
      shipify: "324",
      status: "pending",
      date: "17 02 2024",
      customer: "akku",
      email: "akku@gmail.com",
      country: "usa",
      category: "laptop",
    },
    {
      id: "1273",
      shipify: "1233",
      status: "active",
      date: "17 02 2024",
      customer: "uday",
      email: "nit@gmail.com",
      country: "mexico",
      category: "phone",
    },
    {
      id: "100",
      shipify: "2021",
      status: "pending",
      date: "17 02 2024",
      customer: "kunal",
      email: "lun@gmail.com",
      country: "night view",
      category: "laptop",
    },
    {
      id: "53",
      shipify: "13",
      status: "pending",
      date: "17 02 2024",
      customer: "bharath",
      email: "bha@gmail.com",
      country: "usa",
      category: "phone",
    },
  ]);

  const handleSelectionChange = (e) => {
    // category selection
    setSelectedOption(e.target.value);
  };

  const handleSelectionStatusChange = (e) => {
    // status selection
    setSelectedStatusOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here

    if (validateForm()) {
      setdata([formData, ...data]);
      setFormData({
        id: "",
        shipify: "",
        status: "",
        date: "",
        customer: "",
        email: "",
        country: "",
        shipping: "",
      });

      setShowForm(false);
    } else {
      // Form is invalid, you can handle the errors or display a message
      alert("enter all fields");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleInputSearch = (e) => {
    setSearchInput(e.target.value)
    //input search
    setSearchInput(e.target.value);
  };

  const handlesearchedData = () => {
    console.log(searchdata);

    console.log(selectedOption);
    console.log(selectedStatusOption);
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          
          <h1>Orders</h1>
        </div>
        <div className="createnew">
          <button className="create" onClick={() => setShowForm(!showForm)}>
            Create
          </button>
        </div>
      </div>

      <div className="form">
        {showForm && (
          <div className="forms">
            <form onSubmit={handleSubmit}>
              <label>
                ID:
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                />
              </label>
              <br />

              <label>
                Shipify:
                <input
                  type="text"
                  name="shipify"
                  value={formData.shipify}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <div className="status-group">
                <label>Status:</label>
                <div className="radio-group">
                  <label
                    className={`radio-label ${
                      formData.status === "active" ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      checked={formData.status === "active"}
                      onChange={handleInputChange}
                    />
                    Active
                  </label>
                  <label
                    className={`radio-label ${
                      formData.status === "pending" ? "pending" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="status"
                      value="pending"
                      checked={formData.status === "pending"}
                      onChange={handleInputChange}
                    />
                    Pending
                  </label>
                </div>
              </div>

              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </label>
              <br />

              <label>
                Customer:
                <input
                  type="text"
                  name="customer"
                  value={formData.customer}
                  onChange={handleInputChange}
                />
              </label>
              <br />

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <br />

              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </label>
              <br />

              <label>
                Category:
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                />
              </label>
              <br />

              <button type="submit">Submit</button>
              <button className="delete" onClick={deleteform}>X</button> {/*to  keep form visibility to none */}

            </form>
          </div>
        )}
      </div>
      <div className="secondbox">
        <div className="search">
          <div className="input-search">
            <div className="text">
              <h5>What are you looking for?</h5>
            </div>
            <div className="input">
              <input
                type="text"
                className="inputsearch"
                placeholder="search for customer"
                onChange={handleInputSearch}
              />
            </div>
          </div>

          <div className="category">
            <div className="category-text">
              <h4> Category</h4>
            </div>
            <div className="category-search">
              <select value={selectedOption} onChange={handleSelectionChange}>
                <option value="phone">Phone</option>
                <option value="laptop">Laptop</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <div className="status">
            <div className="status-text">
              <h4>Status</h4>
            </div>
            <div className="status-search">
              <select
                value={selectedStatusOption}
                onChange={handleSelectionStatusChange}
              >
                <option value="pending">Pending</option>
                <option value="active">Active</option>

                <option value="all">All</option>
              </select>
            </div>
          </div>

          <div className="searchsubmit">
            <button
              type="button"
              className="submit"
              onClick={handlesearchedData}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <Showdata
        data={data}
        searchdata={searchdata}
        selectedOption={selectedOption}
        selectedStatusOption={selectedStatusOption}
      />
    </div>
  );
};

export default Header;
