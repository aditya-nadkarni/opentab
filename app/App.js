import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

const backgroundImage = require('./assets/blue_purple_gradient.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
        <NavBar/>
        <LandingPage/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e4eaf5',
  },
  backgroundImage: {
    opacity: 0.5,
    width: '100%',
    height: '100%',
  },
  navbar: {
    paddingTop: '5%',
    padding: '2%',
    alignItems: 'left',
    justifyContent: 'left',
  },
});
