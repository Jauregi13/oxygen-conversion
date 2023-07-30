import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './SavedConversions.css';

function SavedConversions(){

    return(
        <div className='savedConversions'>
             <div id="titleSaved">saved</div>
            <div className='item'>
                <div className='itemInfo'>
                    <div className='itemText'> 100 miles - 160 km</div>
                </div>
                <div className='removeItem'>
                    <FontAwesomeIcon icon={faXmark}  className='close'/>
                </div>
            </div>
        </div>
       

        

    )

}


export default SavedConversions;