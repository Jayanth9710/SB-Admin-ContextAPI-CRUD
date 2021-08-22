import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import ProductContext from "./productContext";

function EditProd(props) {
    const [prodName, setProdName] = useState("");
    const [price, setPrice] = useState("");

  const prodContext = useContext(ProductContext);

  const history = useHistory();

  useEffect(() => {
console.log(props);
    let prodData = prodContext.prodList[props.match.params.id-1];
    setProdName(prodData.prodName);
    setPrice(prodData.price);
},[props,prodContext])

  

  let handleSubmit = (e) => {
    e.preventDefault();
    let prodData={prodName, price};
    prodContext.prodList[props.match.params.id-1] = prodData
    prodContext.setProdList([...prodContext.prodList])
    history.push("/prod")
   
  };

  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit Product Details</h1>
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
                value="Update"
                className="btn btn-primary mt-3 "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditProd
