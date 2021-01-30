import './Main.css';
import CountryList from '../components/CountryList/CountryList';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const url = 'https://restcountries.eu/rest/v2/all';
  const [countries, setCountries] =useState([]);
  // console.log(countries);
  useEffect(() => {
axios.get(url)
.then(res => {
  console.log(res.data);
  setCountries(res.data)
})
.catch(error => console.error)
  }, [])

  return (
    <div className="main">
<CountryList array={countries}/>
<CountryInfo />
    </div>
  );
}

export default Main;
