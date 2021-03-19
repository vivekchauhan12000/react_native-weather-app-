//import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';
import * as Location from 'expo-location';
import Weatherinfo from './components/Weatherinfo'
import WeatherDetails from './components/WeatherDetail'

const weather_apikey="4f266d8162df1fd9714255168a67112f"
export default function App() {
  const [errorMessage,setErrorMessage]=useState(null)
  const [currentWeather,setCurrentWeather]=useState(null)
  const [unitsSystem,setUnitsSytem]=useState("metric")
  useEffect(()=>{
  load()
  },[])

  async function load(){
   try {
     let {status}=await Location.requestPermissionsAsync()

     if (status!=='granted') {
      setErrorMessage('location access needed');
      return;
     } 
     const location = await Location.getCurrentPositionAsync();
    
     const {latitude,longitude}=location.coords;

     const weatherURL=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${weather_apikey}`
     const response=await fetch(weatherURL)
     const result=await response.json()

     if(response.ok){
       setCurrentWeather(result)
     }else{
       setErrorMessage(result.message)
     }
     
     Alert.alert(`${latitude} and ${longitude} `);
     
   } catch (error) {
     setErrorMessage(error.message)
   }
  }
  if(currentWeather){
    const {main:{temp}}=currentWeather
    const cel=temp-273.15
  return (
    <View style={styles.back}>
      <View>
     
      <Weatherinfo currentWeather={currentWeather}/>
      </View>
     <WeatherDetails Weather={currentWeather}/>
    </View>
  );
}else{
  return (
    <View style={styles.container}>
      
      <Text>{errorMessage}</Text>
     
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  main:{
    margin:4,
    padding:20,
    fontSize:20,
    color:"purple"
  },
  back:{
    margin:0,
    padding:0,
    width:"100%",
    height:"100%",

  
    backgroundColor:"#6975A6"
  }
});
