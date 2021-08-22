import React, { useState } from 'react'

let ProductContext = React.createContext();

export default ProductContext;

// Provider for Users.//

export const ProdProvider = ({children}) => {

    const [prodList,setProdList] = useState([])

    return <ProductContext.Provider value={{prodList,setProdList}}>
        {children}
    </ProductContext.Provider>
} 