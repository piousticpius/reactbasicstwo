import React,{useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/ProductActions';
const ProductDetail=()=>{
    const product=useSelector((state)=>state.allProducts.products)
    const {image,title,price,category,description}=product;
    const {productid}=useParams();
    const dispatch=useDispatch();
    console.log(product);
    const fetchProductDetail=async () => {
const response=await axios.get('https://fakestoreapi.com/products/'+productid)
.catch((err)=>{
console.log("Err ",err)
});
dispatch(selectedProduct(response))
    };
    useEffect(()=>{
        if(productid && productid!="")
        fetchProductDetail();
    },[productid]);
    
    return(
        <div className='ui-grid-container'>
        {Object.keys(product).length===0?(
<div>...loading</div>
        ):(

      
        <div className='ui-placeholder-segment'>
        <div className='ui two column stackable center aligned grid'>
        <div className='ui-vertical-divider'>AND</div>
        <div className='middle-aligned-row'>
       
        <div className='column lp'>
        <img className='ui-fluid-image' src={image}/>
        </div>
        <div className='column rp'>
        <h1>{title}</h1>
        <h2>
        <a className='ui teal tag label'>${price}</a>
        </h2>
        <h3>
        <a className='ui brown block header'>{category}</a>
        <p>{description}</p>
        </h3>
        <div className='ui vertical animated button' tabIndex='0'>
        <div className='hidden content'>
        <i className='shop icon'></i>
       
        </div>
        <div className='visible content'>Add to Cart</div>
        </div>
        </div>
        </div>
        </div>
        </div>
        )}
        <h1>ProductDetail</h1>
        </div>
    );
};
export default ProductDetail