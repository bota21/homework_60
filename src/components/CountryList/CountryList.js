import './CountryList.css';
import { React } from 'react';

const CountryList = ({array}) => {
    
    let addCountryLists = array.map(item => {        
        return <h5 tabIndex='1' className='countryName' key={item.alpha3Code} 
        >
        {item.name}
        </h5>        
    })
    
    return (
        <div className='CountryList'>
        {addCountryLists}
        </div>
        )
    }
    
    export default CountryList