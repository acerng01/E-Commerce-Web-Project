import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog  from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import { useEffect } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const CityDropdown = () => {

    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);

    const [cityList, setcityList] = useState([]);

    const context = useContext(MyContext);

    const selectCity=(index, city) => {
        setselectedTab (index);
        setisOpenModal (false);
        context.setselectedCity (city);
    }

    useEffect(()=>{
        setcityList(context.cityList);
    },[])

    const filterList = (e) => {
        const keyword = e.target.value;
        console.log(keyword)

        if (keyword!==""){
            const list = cityList.filter((item)=>{
                return item.name.includes(keyword);
            });
        console.log(list)

        setcityList(list)

        } else {
        setcityList(context.cityList);

        }
    }

    return (
        <>
        <Button className='cityDrop' onClick={() =>setisOpenModal(true)}>
            <div className='info d-flex flex-column'>
                <span className='label'>Your location</span>
                <span className='name'>{context.selectedCity!=="" ? context.selectedCity : 'Select Location'}</span>
            </div>
            <span className='ml-auto'><FaAngleDown/></span>
        </Button>

        <Dialog open={isOpenModal} onClose={() =>setisOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
            <h4 className='mb-0'>Choose your delivery location</h4>
            <p>Enter your city.</p>
            <Button className='close'  onClick={() =>setisOpenModal(false)}><IoMdClose/></Button>

            <div className='headerSearch w-100'>
                <input type="text" placeholder="Enter your city..." onChange={filterList}/>
                <Button><IoSearch/></Button>
            </div>

            <ul className='cityList mt-3'>
                {
                    cityList?.length !==0 && cityList?.map((item, index)=>{
                        return (
                            <li key={index}><Button onClick={() =>selectCity(index, item.name)}
                                className = {`${selectedTab === index ? 'active' : ''}`}
                            >{item.name}</Button></li>
                        )
                    })
                }

            </ul>
        </Dialog>
        </>
    )
}

export default CityDropdown;