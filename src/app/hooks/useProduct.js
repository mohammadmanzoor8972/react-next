import React, { Component, useEffect } from 'react'    


const useProduct = ()=>{
    
    const [product, setProduct] = React.useState();

    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((resp)=>{
        setProduct(resp.products)
      });
    },[product?.products])

    return [product];
}

export default useProduct;