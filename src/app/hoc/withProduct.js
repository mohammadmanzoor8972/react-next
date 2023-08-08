import React, { Component } from 'react'    
import useProduct from '../hooks/useProduct';

const withProduct = (Component)=>{
    return (props)=>{
    const [product] = useProduct();
        return (<div>
            <Component {...props} product={product}/>
            </div>)
    }
}

export default withProduct;