import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native';
import MapView ,{PROVIDER_GOOGLE,Marker,Callout}from 'react-native-maps';
import{Feather} from '@expo/vector-icons';
import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}  
      initialRegion={{
      latitude:5.5077489,
      longitude:-45.2452658,
      latitudeDelta:0.008,
      longitudeDelta:0.008
    }}>
      <Marker
      icon={mapMarker}
      calloutAnchor={{
        x:2.7,y:0.8,
      }}
      coordinate={{
        latitude:5.5077489,
        longitude:-45.2452658,
      }}
      />
      <Callout tooltip={true} onPress={()=>{alert('oi sou eu denovo')}}>
        <View style={styles.calloutContainer}>
        <Text style={styles.calloutText}>the Boys</Text>
        </View>
      </Callout>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Orfanatos encontrados</Text>
        <TouchableOpacity style={styles.createOrphanagesButton} onPress={()=>{alert('oi sou eu denovo')}}>
          <Feather name="plus" size={20} color="#FFF">

             
          </Feather>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  map:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  calloutContainer:{
    width:160,
    height:46,
    paddingHorizontal:16,
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius:16,
    justifyContent:'center',
    
  },
  calloutText:{
    color:'#0089a5',
    fontSize:14,

  },
footer:{
  position:'absolute',
  left:24,
  right:24,
  bottom:32,

  backgroundColor:'FFF',
  borderRadius:20,
  height:56,
  paddingLeft:24,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
elevation:3,
},
footerText:{
  color:'#8fa7b3'
},
createOrphanagesButton:{
  width:56,
  height:56,
  backgroundColor:'#15c3d6',
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center',

},

});
