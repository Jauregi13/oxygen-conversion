import './Convert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRHeart } from '@fortawesome/free-regular-svg-icons';
import { useRef, useState } from 'react';


function Convert() {

    const [converter,setConverter] = useState({one : 'km',two : 'miles'});
    const [convertValue,setConvertValue] = useState(0.00);
    const selectConversion = useRef();
    const convertNumber = useRef();

    function changeConverter(){
       var conversions = selectConversion.current.value.split('_');
       setConverter({one : conversions[0], two: conversions[1]});
    }
    /**
     * Le da la vuelta al convertidor, es decir, por ejemplo en vez de kilometros a millas se convierte de millas a kilometros
     */
    function reverseConversion(){
        var conversionString =  selectConversion.current.value;
        var conversions = conversionString.split('_');
        setConverter({one : conversions[1], two: conversions[0]});

        var aux = convertValue;
        setConvertValue(convertNumber.current.value);
        convertNumber.current.value = aux;
        selectConversion.current.value = conversions[1]+'_'+conversions[0];
    }

    function calculateConversion(){
        switch (selectConversion.current.value) {
            case 'km_miles':
                setConvertValue((convertNumber.current.value / 1.609344).toFixed(2));
                break;

            case 'miles_km':
                setConvertValue((convertNumber.current.value * 1.609344).toFixed(2));
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
                        <select defaultValue={'km_miles'} id='conversion' ref={selectConversion} className='converter' onChange={changeConverter}>
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
                        <input type='number' ref={convertNumber} onChange={calculateConversion}/>
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