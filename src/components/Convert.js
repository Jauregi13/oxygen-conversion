import './Convert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRHeart } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useRef, useState } from 'react';
import SavedConversions from './SavedConversions';

function Convert() {

    const [converter,setConverter] = useState({one : 'km',two : 'miles'});
    const [convertValue,setConvertValue] = useState(parseFloat(0).toFixed(2));
    const [conversion,setConversion] = useState({});
    const [count,setCount] = useState(1);
    const selectConversion = useRef();
    const convertNumber = useRef();

    function saveConversion(){

        if(parseInt(convertNumber.current.value) !== 0){
            
                const newConversion = { 
                    id: count,
                    convertAt : converter.one,
                    convertTo : converter.two,
                    valueToConvert : convertNumber.current.value,
                    convertedValue: convertValue
                }
                setConversion(newConversion);
                
                convertNumber.current.value = 0;
                setConvertValue(parseFloat(0).toFixed(2));
                setCount(count+1);

            }
        
        
    }

    useEffect(() => {
        localStorage.setItem("nextItemId",count);
    },[count]);

    useEffect(() => {
        if(localStorage.getItem("nextItemId") !== null){
            setCount(parseInt(localStorage.getItem("nextItemId")));
        }
    },[]);

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
                setConvertValue((convertNumber.current.value / 3.281).toFixed(2));
                break;
            
            case 'metres_feet':
                setConvertValue((convertNumber.current.value * 3.281).toFixed(2));
                break;
            
            case 'cm_inches':
                setConvertValue((convertNumber.current.value / 2.54).toFixed(2));
                break;
            
            case 'inches_cm':
                setConvertValue((convertNumber.current.value * 2.54).toFixed(2));
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
                    <div className='conversion-content'>
                    <div className='line_content'>
                        <div className='firstColumn'>
                            <select defaultValue={'km_miles'} id='conversion' ref={selectConversion} className='converter' onChange={changeConverter}>
                                <option value='km_miles'>km &rarr; miles</option>
                                <option value='miles_km'>miles &rarr; km</option>
                                <option value='feet_metres'>feet &rarr; metres</option>
                                <option value='metres_feet'>metres &rarr; feet</option>
                                <option value='cm_inches'>cm &rarr; inches</option>
                                <option value='inches_cm'>inches &rarr; cm</option>
                            </select>
                        </div>
                        <div className='secondColumn'>
                            <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={reverseConversion}/>
                        </div>
                        
                    </div>
                    <div className='line_content'>
                        <div className='firstColumn'>
                            <input type='number'defaultValue={0} ref={convertNumber} onChange={calculateConversion}/>
                        </div>
                        <div className='secondColumn'>
                            <label>{converter.one}</label>
                        </div>
                        
                    </div>
                    </div>
                    <div className='result-content'>
                        <div className='result'>
                            <div className='firstColumn'>
                                <div id='iconoFav'><FontAwesomeIcon icon={faRHeart} onClick={saveConversion}/></div>
                                <div id='number_result'>{convertValue}</div>
                            </div>
                            <div className='secondColumn'>
                                <div id='text_converter'>{converter.two}</div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            {(Object.keys(conversion).length !== 0 || localStorage.getItem("conversions") !== null)  && <SavedConversions data={conversion} /> }
            
        </div>
    );
}

export default Convert;