import './css/App.css';
import React,{useEffect,useState} from "react";
import { Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
 } from '@mui/material';
import CardBtn from './CardBtn';
import LineChart from './LineChart';
import Map from './Map';
import "leaflet/dist/leaflet.css";
import { sortData, prettyPrintStat } from "./util";
import numeral from "numeral";


function App() {
  const [selectedCountry,setSelectedCountry]=useState('ww');
  const [countriesList,setCountriesList]=useState([]);
  const [countryData,setCountryData]=useState({});
  const [countryDataTable,setCountryDataTable]=useState([]);
  const [mapCenter,setMapCenter]=useState([34.80746, -40.4796 ]);
  const [mapZoom,setMapZoom]=useState(3);
  const [mapCountries,setMapCountries]=useState([])
  const [caseType,setCaseType]=useState('cases')

  function initCountriesList(countries){
    setCountriesList(countries)
  }

  function initTable(countries){
    setCountryDataTable(countries)
  }

  const onCountrySelect = async (e)=>{
    const country=e.target.value
    setSelectedCountry(country)

    const URL = country==='ww'
                ?`https://disease.sh/v3/covid-19/all`
                :`https://disease.sh/v3/covid-19/countries/${country}?strict=true`
    
    await fetch(URL)
    .then((response)=>response.json())
    .then((data)=>{
      const countryData={
        cases:data.cases,
        todayCases:data.todayCases,
        recovered:data.recovered,
        todayRecovered:data.todayRecovered,
        deaths:data.deaths,
        todayDeaths:data.todayDeaths
      }

      setCountryData(countryData)
      setMapCenter([data.countryInfo.lat,data.countryInfo.long])
      setMapZoom(4);
    })
  }

  useEffect(()=>{

    // Getting list of all countries for <Select />
    const getCountriesList=async ()=>{
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response)=>response.json())
      .then((data)=>{
        const countries = data.map((country)=>({
          name:country.country,
          value:country.countryInfo.iso3,
          cases:country.cases
        }))

        const sortedData=sortData(countries)
        initCountriesList(countries)
        initTable(sortedData)
        setMapCountries(data)
      })
    }

    // One time initializing wordwide data for <Card />
    const initWorldwideData=async ()=>{
      await fetch(`https://disease.sh/v3/covid-19/all`)
      .then((response)=>response.json())
      .then((data)=>{
        const countryData={
          cases:data.cases,
          todayCases:data.todayCases,
          recovered:data.recovered,
          todayRecovered:data.todayRecovered,
          deaths:data.deaths,
          todayDeaths:data.todayDeaths
        }

        setCountryData(countryData)
      })
    }

    getCountriesList()
    initWorldwideData()
  },[])

  


  return (
    <div className="app">
      <div className="app-left">
        <div className="app-left-header">
          <h1>Covid-19 Tracker</h1>
          <FormControl>
            <Select
            value={selectedCountry}
            onChange={onCountrySelect}
            >

              <MenuItem value={'ww'}>Worldwide</MenuItem>
              {countriesList.map(country=>
                <MenuItem value={country.name}>{country.name}</MenuItem>
              )}

            </Select>
          </FormControl>
        </div>

        <div className="app-left-buttons">       
          <CardBtn 
            title="Coronavirus Cases"
            cases={prettyPrintStat(countryData.todayCases)}
            total={numeral(countryData.cases).format("0.0a")}
            onClick={e=>setCaseType('cases')}
            click={caseType==='cases'}
            color={'red'}
          />
          <CardBtn 
            title="Recovered"
            cases={prettyPrintStat(countryData.todayRecovered)}
            total={numeral(countryData.recovered).format("0.0a")}
            onClick={e=>setCaseType('recovered')}
            click={caseType==='recovered'}
            isGreen={caseType==='recovered'}
            color={'green'}
          />
          <CardBtn 
            title="Deaths"
            cases={prettyPrintStat(countryData.todayDeaths)}
            total={numeral(countryData.deaths).format("0.0a")}
            onClick={e=>setCaseType('deaths')}
            click={caseType==='deaths'}
            color={'red'}
          />
        </div>

        <div className="app-left-map">
          <Map 
            center={mapCenter}
            zoom={mapZoom}
            countries={mapCountries}
            casesType={caseType}
          />
        </div>
      </div>

      <div className="app-right">
        <div className="app-right-table">
          <p>Cases by Country</p>
          <table>
            {countryDataTable.map((i)=>
              <tr>
                <td>{i.name}</td>
                <td><strong>{numeral(i.cases).format("0,0")}</strong></td>
              </tr>
            )}
          </table>
        </div>

        <div className="app-right-chart">
          <p>Worldwide new {caseType}</p>
          <LineChart casesType={caseType}/>
        </div>
      </div>
    </div>
  );
}

export default App;
