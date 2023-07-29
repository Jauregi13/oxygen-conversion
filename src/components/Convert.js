import './Convert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRHeart } from '@fortawesome/free-regular-svg-icons';
import Select from 'react-select';
import { useEffect, useState } from 'react';


function Convert() {

    const [converter,setConverter] = useState({one : 'km',two : 'miles'});
    const [convertValue,setConvertValue] = useState('0.00');

    function changeConverter(){
       var conversionString =  document.getElementById('conversion').value
       var conversions = conversionString.split('_');
       setConverter({one : conversions[0], two: conversions[1]});
    }

    function reverseConversion(){
        var conversionString =  document.getElementById('conversion').value
        var conversions = conversionString.split('_');
        setConverter({one : conversions[1], two: conversions[0]});
    }

    function calculateConversion(){
        switch (document.getElementById('conversion').value) {
            case 'km_miles':
                
                break;

            case 'miles_km':

                break;
        
            case 'feet_metres':

                break;
            
            case 'metres_feet':

                break;
            
            case 'feet_metres':

                break;
            
            case 'cm_inches':

                break;
            
            case 'inches_cm':

                break;
            default:
                break;
        }
    }


    return (
        <div className="container">
            <div className='convert'>
                <div className='content'>
                    <h1>convert</h1>
                    <div className='line_content'>
                        <select id='conversion' className='converter' onChange={changeConverter}>
                            <option value='km_miles'>km - miles</option>
                            <option value='miles_km'>miles - km</option>
                            <option value='feet_metres'>feet - metres</option>
                            <option value='metres_feet'>metres - feet</option>
                            <option value='cm_inches'>cm - inches</option>
                            <option value='inches_cm'>inches - cm</option>
                        </select>
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={reverseConversion}/>
                    </div>
                    <div className='line_content'>
                        <input type='number'/>
                        <label>{converter.one}</label>
                    </div>
                    <div className='line_content result'>
                        <FontAwesomeIcon icon={faRHeart} />
                        <label id='number_result'>{convertValue}</label>
                        <label id='text_converter'>{converter.two}</label>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Convert;