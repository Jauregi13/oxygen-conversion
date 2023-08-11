import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import './SavedConversions.css';

const SavedConversions = ({data}) =>{

    const [conversions,setConversions] = useState([]);

    useEffect(() => {

        setConversions(JSON.parse(localStorage.getItem("conversions")));

    },[])
    

    useEffect(() => {
        
        if(Object.keys(data).length !== 0){
            
            setConversions([...conversions,data]);
                
        }
        
        
                    
    },[data]);

    useEffect(() => {

        localStorage.setItem("conversions",JSON.stringify(conversions));        

    },[conversions]);
    
    return(
        
        <div className='savedConversions'>
            <div id="titleSaved">saved</div>
            {conversions.map(conversion =>{

                return(
                    <div className='item' key={conversion.id}>
                        <div className='itemInfo'>
                            <div className='itemText'> 
                                {conversion.valueToConvert} {conversion.convertAt} &rarr; {conversion.convertedValue} {conversion.convertTo}
                            </div>
                        </div>
                        <div className='removeItem'>
                            <FontAwesomeIcon icon={faXmark}  className='close' onClick={() => {
                                setConversions(conversions.filter(c => c.id !== conversion.id))
                            }}/>
                        </div>
                    </div>
                )
            })}
            
            
        </div>
       

        

    )

}

export default SavedConversions;