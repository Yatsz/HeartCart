import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeCard = ({ title, image, distance, time, deliveries, rating }) => {
  const renderStars = () => {
    return <Text>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</Text>;
  };

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.titleRow}>
          <Text style={styles.cardTitle}>{title}</Text>
          {renderStars()}
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.cardTimeDistance}>{`${time} ⋅ ${distance} from you`}</Text>
          <Text style={styles.deliveriesLeft}>{`${deliveries} deliveries left`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000000', // Black color
    shadowOffset: { width: 0, height: 4 }, // Y offset of 4, no X offset
    shadowRadius: 4, // Blur of 4
    shadowOpacity: 0.25, // 25% opacity
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  cardImage: {
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    width: '100%',
    height: 128, 
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardTimeDistance: {
    fontSize: 12,
    color: 'gray',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4, // Add a small margin at the top for spacing
  },
  deliveriesLeft: {
    fontSize: 12,
    color: 'gray',
   
  },
  // Add more styles if necessary
});

export default HomeCard;
