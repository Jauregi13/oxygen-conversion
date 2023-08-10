import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import './SavedConversions.css';

const SavedConversions = ({data}) =>{

    const [conversions,setConversions] = useState([]);

    useEffect(() => {

        
        setConversions(prevConversions => prevConversions.concat(data));
        
                    
    },[data]);

    useEffect(() => {

        localStorage.setItem("conversions",JSON.stringify(conversions));        

    },[conversions]);
    
    return(
        
        <div className='savedConversions'>
            <div id="titleSaved">saved</div>
            {conversions.map((conversion,indice) =>{

                return(
                    <div className='item' key={indice}>
                        <div className='itemInfo'>
                            <div className='itemText'> 
                                {conversion.valueToConvert} {conversion.convertAt} &rarr; {conversion.convertedValue} {conversion.convertTo}
                            </div>
                        </div>
                        <div className='removeItem'>
                            <FontAwesomeIcon icon={faXmark}  className='close'/>
                        </div>
                    </div>
                )
            })}
            
            
        </div>
       

        

    )

}

export default SavedConversions;