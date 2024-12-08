import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.increaseButton]} onPress={onIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.decreaseButton]} onPress={onDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  teamName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2E86C1',
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  increaseButton: {
    backgroundColor: '#28a745',
  },
  decreaseButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TeamScore;
