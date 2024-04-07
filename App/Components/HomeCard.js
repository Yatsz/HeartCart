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
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardTimeDistance}>{`${time} · ${distance} from you`}</Text>
        <View style={styles.starRating}>
          {renderStars()}
        </View>
        <Text style={styles.deliveriesLeft}>{`${deliveries} delivers left`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    margin: 10,
  },
  cardImage: {
    width: '100%',
    height: 150, // Set a fixed height or make it dynamic depending on your needs
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardTimeDistance: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  starRating: {
    // Additional styles for star rating if needed
  },
  deliveriesLeft: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  // Add more styles if necessary
});

export default HomeCard;
