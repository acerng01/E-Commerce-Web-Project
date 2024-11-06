import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import 'react-range-slider-input/dist/style.css';
import RangeSlider from 'react-range-slider-input';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);
    return (

        <div className="sidebar">

            <div className="filterBox">
                <h6>PRODUCT CATEGORIES</h6>

                <div className="scroll">
                    <ul>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>

                    </ul>
                </div>
            </div>

            <div className="filterBox">
                <h6>FILTER BY PRICE</h6>
                <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />

                <div className='d-flex pt-2 pb-2 priceRange'>
                    <span>From: <strong className='text-dark'>{value[0]}</strong></span>
                    <span className='ml-auto'>To: <strong className='text-dark'>{value[1]}</strong></span>
                </div>
            </div>

            <div className="filterBox">
                <h6>PRODUCT STATUS</h6>

                <div className="scroll">
                    <ul>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="In Stock" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="On Sale" /></li>

                    </ul>
                </div>
            </div>

            <div className="filterBox">
                <h6>MAKE</h6>

                <div className="scroll">
                    <ul>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ducati" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="BMW" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="BMW" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="BMW" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="BMW" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="BMW" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="BMW" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="BMW" /></li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="BMW" /></li>

                    </ul>
                </div>
            </div>

            <br />

            <Link to="#"><img src='https://www.team-bhp.com/forum/attachments/motorbikes/2659827d1727344911-august-2024-indian-motorcycle-scooter-sales-figures-analysis-null20240923wa0055.jpg' className='w-100' /></Link>

        </div>


    )
}

export default Sidebar;