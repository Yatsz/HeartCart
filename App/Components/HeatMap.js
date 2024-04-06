import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Heatmap } from 'react-native-maps';
import homelessData from '../assets/Homeless_Data.json'; // Import JSON data

const HeatMap = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // Convert JSON data to the format expected by the Heatmap component
    const parsedPoints = homelessData.map(item => ({
      latitude: item.Latitude,
      longitude: item.Longitude,
      weight: item.Count,
    }));
    setPoints(parsedPoints);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Heatmap points={points} 
        radius={50} // Increase the radius to make each heat spot larger
        opacity={0.8} // Adjust opacity to make the heatmap more visible
        gradient={{
          colors: ["green", "yellow", "red"], // Define the color of the heatmap spots
          startPoints: [0.01, 0.25, 0.50], // At which point each color starts
          colorMapSize: 256 // Size of the gradient
        }}/>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HeatMap;
