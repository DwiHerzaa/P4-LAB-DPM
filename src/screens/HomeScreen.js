import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import TeamScore from '../components/TeamScore';

const HomeScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  useEffect(() => {
    if (scoreA === 10) {
      Alert.alert('Pemenang', '🎉 Red FC Menang! 🎉');
      resetScores();
    } else if (scoreB === 10) {
      Alert.alert('Pemenang', '🎉 Black Hole FC Menang! 🎉');
      resetScores();
    }
  }, [scoreA, scoreB]);

  const increaseScoreA = () => setScoreA(prev => prev + 1);
  const decreaseScoreA = () => setScoreA(prev => (prev > 0 ? prev - 1 : 0));

  const increaseScoreB = () => setScoreB(prev => prev + 1);
  const decreaseScoreB = () => setScoreB(prev => (prev > 0 ? prev - 1 : 0));

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Skor Pertandingan Futsal ⚽</Text>
      <TeamScore
        teamName="Red FC"
        score={scoreA}
        onIncrease={increaseScoreA}
        onDecrease={decreaseScoreA}
      />
      <TeamScore
        teamName="Black Hole FC"
        score={scoreB}
        onIncrease={increaseScoreB}
        onDecrease={decreaseScoreB}
      />
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F6F3',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 30,
    textAlign: 'center',
  },
  resetButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F39C12',
    borderRadius: 8,
    elevation: 3,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
