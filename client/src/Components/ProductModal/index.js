import Button from '@mui/material/Button';
import Dialog  from '@mui/material/Dialog';
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";
import {useContext} from 'react'

import QuantityBox from '../QuantityBox';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductZoom from '../ProductZoom';


const ProductModal = (props) => {

    const context = useContext(MyContext);

    return(
        <Dialog open={true} className='productModal' onClose={()=>context.setisOpenProductModal(false)}>
            <Button className='close' onClick={()=>context.setisOpenProductModal(false)}><IoMdClose/></Button>
            <h4 class="mb-1 font-weight-bold">2023 Ducati Multistrada V4S Ducati Red</h4>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center mr-4'>
                    <span> Brands:</span>
                    <span className="ml-2"><b>Ducati</b></span>
                </div>
                <Rating name="read-only" value={5} readOnly size="small" precision={0.5}/>
                
            </div>

            <hr/>
            <div className='row mt-2 productDetailsModal'>
                <div className='col-md-5'>
                    
                    <ProductZoom/>

                </div>
                <div className='col-md-7'>
                    <div className='d-flex info align-items-center mb-3'>
                        <span className='oldPrice lg mr-2'>$20.00</span>
                        <span className='netPrice text-danger lg'>$15.00</span>
                    </div>

                    <span className='badge bg-success'>IN STOCK</span>

                    <p className='mt-3'>The new Ducati Multistrada V4 is for those who want to comfortably explore all paths, without compromising on the sports attitude that distinguishes every motorcycle built in Borgo Panigale.</p>
                
                    <div className='d-flex align-items-center'>
                        <QuantityBox/>
                        <Button className='btn-blue bg-red btn-lg btn-big btn-round ml-3'><FaShoppingCart/>Add to Cart</Button>
                    </div>

                    <div className='d-flex align-items-center mt-5 actions'>
                        <Button className='btn-round btn-sml' variant='outlined'><FaRegHeart/>&nbsp; ADD TO WISHLIST</Button>
                        <Button className='btn-round btn-sml ml-3' variant='outlined'><MdOutlineCompareArrows/>&nbsp; COMPARE</Button>
                    </div>
                </div>
            </div>

        </Dialog>
    )
}

export default ProductModal;