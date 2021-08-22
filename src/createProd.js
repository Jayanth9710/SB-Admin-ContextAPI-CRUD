import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ProductContext from "./productContext";

function CreateProd(props) {
  const [prodName, setProdName] = useState("");
  const [price, setPrice] = useState("");
  

  const prodContext = useContext(ProductContext);

  const history = useHistory();

  let handleSubmit = (e) => {
    e.preventDefault();
    let prodData={prodName, price};

    prodContext.setProdList([...prodContext.prodList,prodData])
    history.push("/prod")
    
    setProdName("");
    setPrice("");
    
  };

  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
                type="text"
                value={prodName}
                onChange={(e) => {
                    setProdName(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
                className="form-control"
              />
            </div>
            
            <div className="col-lg-12">
              <input
                type="submit"
                value="submit"
                className="btn btn-primary mt-3 "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProd;
