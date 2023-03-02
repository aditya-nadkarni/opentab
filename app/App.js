import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Device from 'expo-device';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Text>
        This device is {Device.manufacturer}: {Device.modelName}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
