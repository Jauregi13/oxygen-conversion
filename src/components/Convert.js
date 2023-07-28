import './Convert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRHeart } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';


function changeConverter(){

}

function Convert() {

    const [converterOne,setConverterOne] = useState('km');
    const [converterTwo,setConverterTwo] = useState('miles');


    return (
        <div className="container">
            <div className='convert'>
                <div className='content'>
                    <h1>convert</h1>
                    <div className='line_content'>
                        <select className='converter' onChange={changeConverter()}>
                            <option value='km_miles'>km - miles</option>
                            <option value='miles_km'>miles - km</option>
                            <option value='feet_metres'>feet - metres</option>
                            <option value='metres_feet'>metres - feet</option>
                            <option value='cm_inches'>cm - inches</option>
                            <option value='inches_cm'>inches - cm</option>
                        </select>
                        <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
                    </div>
                    <div className='line_content'>
                        <input type='number'/>
                        <label>{converterOne}</label>
                    </div>
                    <div className='line_content result'>
                        <FontAwesomeIcon icon={faRHeart} />
                        <label id='number_result'>62.12</label>
                        <label id='text_converter'>{converterTwo}</label>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Convert;