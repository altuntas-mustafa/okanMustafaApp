import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateDeskScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Desk Page</Text>
      {/* Add your create desk form and logic here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CreateDeskScreen;
