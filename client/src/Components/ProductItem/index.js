import Button from '@mui/material/Button';
import Rating from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from '../ProductModal';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';

const ProductItem = (props) => {

    const context = useContext(MyContext);

    const viewProductDetails=(id) => {
        context.setisOpenProductModal(true);
    }

    const closeProductModal=() => {
        context.setisOpenProductModal(false);
    }

    return (
        <>
        <div className={`productItem ${props.itemView}`}>
        <div className="imgWrapper">
            <img className="w-100" src="https://storage.googleapis.com/mhimg/p/3451/9033451/811d_s.jpg" />
        
        <span className="badge badge-primary">28%</span>
        <div className="actions">
            <Button onClick={() => viewProductDetails(1)}><AiOutlineFullscreen/></Button>
            <Button><FaRegHeart style={{fontSize: '20px'}}/></Button>

        </div>
        </div>

        <div className="info">
        <h4>2023 Ducati Multistrada V4S Ducati Red</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
        
        <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$15.00</span>
        </div>
        </div>
        
    </div>

    </>
    )
}

export default ProductItem;