import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'

export default function WeatherDetail({Weather}) {
  const {
    main:{feels_like,humidity,pressure},
    wind:{speed}
   }=Weather
  return (
    <View style={styles.WeatherDetails}>
      <View style={styles.Row}>
     
        <View style={{...styles.Box,borderRightWidth:1,borderRightColor:"#F05837"}}>
           <View style={styles.Row}>
              <FontAwesome5 name="temperature-low" size={25} color="#F05837"/>
               <View>
                 <Text style={{color:"#F05837",fontSize:15}}>feels like</Text>
                 <Text style={{color:"#F05837",fontSize:25}}>{feels_like} °C</Text>
               </View>
          </View>
      </View>


      <View style={styles.Box}>
      <View style={styles.Row}>
              <MaterialCommunityIcons name="water" size={30} color="#F05837"/>
               <View>
                 <Text style={{color:"#F05837",fontSize:15}}>humidity</Text>
                 <Text style={{color:"#F05837",fontSize:25}}>{humidity} %</Text>
               </View>
          </View>
      </View>
    </View>


    <View style={{...styles.Row,borderTopWidth:1,borderTopColor:"#F05837"}}>
     
        <View style={{...styles.Box,borderRightWidth:1,borderRightColor:"#F05837"}}>
           <View style={styles.Row}>
              <MaterialCommunityIcons name="weather-windy" size={30} color="#F05837"/>
               <View>
                 <Text style={{color:"#F05837",fontSize:15}}>wind Speed</Text>
                 <Text style={{color:"#F05837",fontSize:25}}>{speed} m/s</Text>
               </View>
          </View>
      </View>


      <View style={styles.Box}>
      <View style={styles.Row}>
              <MaterialCommunityIcons name="speedometer" size={30} color="#F05837"/>
               <View>
                 <Text style={{color:"#F05837",fontSize:15}}>pressure</Text>
                 <Text style={{color:"#F05837",fontSize:25}}>{pressure} hPa</Text>
               </View>
          </View>
      </View>
    </View>
      </View>
     
  )
}
const styles= StyleSheet.create({
WeatherDetails:{
  marginTop:50,
  margin:15,
  borderWidth:1,
  borderColor:"#F05837",
  borderRadius:10,
},
Row:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between"
},
Box:{
  flex:1,
  padding:20,
  
}
})
