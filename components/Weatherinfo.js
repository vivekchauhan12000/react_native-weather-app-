import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

export default function Weatherinfo({currentWeather}) {
  const {main:{temp},
         weather:[details],
         name
}=currentWeather
const {icon,main,description}=details
const iconURL=`https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <View style={styles.Weatherinfo}>
      <Text style={styles.main}>{name}</Text>
      <View style={{width:100,height:100,backgroundColor:"#6465A5",borderRadius:10}}>
      <Image style={{...styles.Weathericon,color:"#F05837"}} source={{uri:iconURL}}/>
      </View>
      <Text style={styles.Primary}>{temp}°C</Text>
      <Text style={{color:"#F28A30"}}>{description}</Text>
      <Text style={styles.Secondary}>{main}</Text>

    </View>
  )
}
const styles=StyleSheet.create({
  Weatherinfo:{
    alignItems:'center'
  },
  Weathericon:{
    width:100,
    height:100,
    },
  Primary:{
    fontSize:40,
    color:"#F28A30"
  },
  Secondary:{
    fontSize:20,
    color:"#F28A30",
    marginTop:20
  },
  main:{
    marginTop:10,
    padding:20,
    fontSize:30,
    color:"#F3E96B"
  }
})