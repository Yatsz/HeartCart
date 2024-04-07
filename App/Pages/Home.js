import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Searchbar, DefaultTheme } from 'react-native-paper';
import HomeCard from '../Components/HomeCard';
import data from '../assets/Sample_Data.json'


const svgIcon = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 26.6667C12 28.1334 10.8 29.3334 9.33334 29.3334C7.86668 29.3334 6.66668 28.1334 6.66668 26.6667C6.66668 25.2 7.86668 24 9.33334 24C10.8 24 12 25.2 12 26.6667ZM22.6667 24C21.2 24 20 25.2 20 26.6667C20 28.1334 21.2 29.3334 22.6667 29.3334C24.1333 29.3334 25.3333 28.1334 25.3333 26.6667C25.3333 25.2 24.1333 24 22.6667 24ZM9.60001 19.7334V19.6L10.8 17.3334H20.6667C21.6 17.3334 22.5333 16.8 22.9333 16L28.1333 6.66669L25.8667 5.33335L20.6667 14.6667H11.3333L5.73334 2.66669H1.33334V5.33335H4.00001L8.80001 15.4667L6.93334 18.6667C6.80001 19.0667 6.66668 19.4667 6.66668 20C6.66668 21.4667 7.86668 22.6667 9.33334 22.6667H25.3333V20H9.86668C9.73334 20 9.60001 19.8667 9.60001 19.7334ZM16 12.4L15.2 11.7334C12.5333 9.20002 10.6667 7.60002 10.6667 5.60002C10.6667 4.00002 12 2.66669 13.6 2.66669C14.5333 2.66669 15.4667 3.06669 16 3.73335C16.5333 3.06669 17.4667 2.66669 18.4 2.66669C20 2.66669 21.3333 3.86669 21.3333 5.60002C21.3333 7.60002 19.4667 9.20002 16.8 11.7334L16 12.4Z" fill="#D91400"/>
</svg>`

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    elevation: {
      ...DefaultTheme.colors.elevation,
      level3: 'white',
    },
    primary: '#D91400f',
    onSurfaceVariant: 'black',
    onSurface: 'gray', 
    outline: 'black',
  },
};

const Home = ({}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const renderItem = ({ item }) => (
    <HomeCard
      title={item.title}
      image={{ uri: item.image }}
      distance={item.distance}
      time={item.time}
      deliveriesLeft={item.deliveriesLeft}
      rating={item.rating}
    />
  );

  return (
    <View style={styles.container}>
      <SvgXml xml={svgIcon} width="32" height="32" style={styles.icon} />
      <Searchbar
        placeholder="Search food bank"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.search}
        iconColor="gray"
        theme={theme} 
      />
      <Text style={styles.text}>89 results</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(index) => String(index)}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32, // Padding for everything left and right
    backgroundColor: '#FFF',
  },
  icon: {
    marginTop: 64, // 38 from the top of the screen
    alignSelf: 'flex-start', // Align to the left
  },
  search: {
    marginTop: 16, // 38 from the top of the screen
    alignSelf: 'flex-start', // Align to the left
    width: '100%',
    borderColor: 'black', // Color of the border
    borderWidth: 0.7, 
  },
  text: {
    marginTop: 16, // 38 from the top of the screen
    alignSelf: 'flex-start', // Align to the left
    color: 'gray',
    fontSize: 16,
  },
  card: {
    alignSelf: 'flex-start', // Align to the left
    width: '100%',
  }
});

export default Home;
