import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Example() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zephyr Metro Mini App</Text>
      <Text style={styles.subtitle}>
        This module is exposed via Module Federation and deployed to Zephyr
        Cloud.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#e8f4fd',
    borderRadius: 12,
    margin: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0a2540',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#425466',
    lineHeight: 22,
  },
});
