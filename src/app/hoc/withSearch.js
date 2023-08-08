import React, { Component, useEffect, useState } from 'react'    
import useProduct from '../hooks/useProduct';

const withProduct = (Component)=>{
    // eslint-disable-next-line react/display-name
    return (props)=>{
    const [product] = useProduct();
    const [prod, setProduct] = useProduct([]);

    useEffect(()=>{
            const p = product.filter(item=>item.title.indexOf(value)!=-1)
             setProduct(p);
    }, [product?.products])

    const [text, setText]=useState();
        
        const changeHandler=({currentTarget:value})=>{
            setText(value);
            //product.filter(item=>item.title.indexOf(value)!=-1)
        }

        return (<div>
            <input type='text' value={text} onChange={changeHandler}/>
            <Component {...props} product={prod}/>
            </div>)
    }
}

export default withProduct;