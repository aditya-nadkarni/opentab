import { StyleSheet, Text, View, ImageBackground, Button, TextInput, Alert } from 'react-native';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage'; 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Component, useState } from 'react';


const backgroundImage = require('./assets/blue_purple_gradient.jpg');

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
        <NavBar/>
        <LandingPage/>
        <Button
          color={'white'}
          title="Test app manually"
          onPress={() =>
            navigation.navigate('Reciept')
          }
        />
    </ImageBackground>
  );
};

class RecieptScreen extends Component {
  state = {
    numberOfItems: 3,
    items: [],
    prices: []
  }

  appendItem(item){
    let newItems = this.state.items
    newItems.push(item)
    this.setState({items: newItems})
    console.log(this.state.items)
  }

  appendPrice(price){
    let newPrices = this.state.prices
    console.log(this.state.items)
    newPrices.push(price)
    this.setState({prices: newPrices})
    console.log(this.state.prices)
  }

  render(){
    return (
      <View>
        <Text style={{height: 40, textAlign: 'center', paddingTop: 20, justifyContent: 'center',fontSize:15}}>Enter your reciept items and their prices</Text>

        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={{height: 40, textAlign: 'left', paddingLeft: 30, flex:3, fontSize:15}}
                placeholder="Type the name of an item"
                onEndEditing={(e) => this.appendItem(e.nativeEvent.text)}
            />
            <TextInput
                style={{height: 40, textAlign: 'right', paddingRight: 30, flex:1,fontSize:15}}
                placeholder="Cost"
                onEndEditing={(e) => this.appendPrice(parseFloat(e.nativeEvent.text))}
            />
        </View>
        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={{height: 40, textAlign: 'left', paddingLeft: 30, flex:3, fontSize:15}}
                placeholder="Type the name of an item"
                onEndEditing={(e) => this.appendItem(e.nativeEvent.text)}
            />
            <TextInput
                style={{height: 40, textAlign: 'right', paddingRight: 30, flex:1,fontSize:15}}
                placeholder="Cost"
                onEndEditing={(e) => this.appendPrice(parseFloat(e.nativeEvent.text))}
            />
        </View>
        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={{height: 40, textAlign: 'left', paddingLeft: 30, flex:3, fontSize:15}}
                placeholder="Type the name of an item"
                onEndEditing={(e) => this.appendItem(e.nativeEvent.text)}
            />
            <TextInput
                style={{height: 40, textAlign: 'right', paddingRight: 30, flex:1,fontSize:15}}
                placeholder="Cost"
                onEndEditing={(e) => this.appendPrice(parseFloat(e.nativeEvent.text))}
            />
        </View>
        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={{height: 40, textAlign: 'left', paddingLeft: 30, flex:3, fontSize:15}}
                placeholder="Enter the tax amount"
                onEndEditing={(e) => this.appendItem(e.nativeEvent.text)}
            />
            <TextInput
                style={{height: 40, textAlign: 'right', paddingRight: 30, flex:1,fontSize:15}}
                placeholder="Tax"
                onEndEditing={(e) => this.appendPrice(parseFloat(e.nativeEvent.text))}
            />
        </View>
        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={{height: 40, textAlign: 'left', paddingLeft: 30, flex:3, fontSize:15}}
                placeholder="Enter the tip amount"
                onEndEditing={(e) => this.appendItem(e.nativeEvent.text)}
            />
            <TextInput
                style={{height: 40, textAlign: 'right', paddingRight: 30, flex:1,fontSize:15}}
                placeholder="Tip"
                onEndEditing={(e) => this.appendPrice(parseFloat(e.nativeEvent.text))}
            />
        </View>

        <Text style={{height: 40, textAlign: 'center', paddingTop: 20, justifyContent: 'center',fontSize:15}}>Enter the names or initials of the everyone splitting</Text>
        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={{height: 40, textAlign: 'left', paddingLeft: 30, flex:3, fontSize:15}}
                placeholder="Enter name"
                onEndEditing={(e) => this.appendItem(e.nativeEvent.text)}
            />
        </View>
        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={{height: 40, textAlign: 'left', paddingLeft: 30, flex:3, fontSize:15}}
                placeholder="Enter name"
                onEndEditing={(e) => this.appendItem(e.nativeEvent.text)}
            />
        </View>
        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={{height: 40, textAlign: 'left', paddingLeft: 30, flex:3, fontSize:15}}
                placeholder="Enter name"
                onEndEditing={(e) => this.appendItem(e.nativeEvent.text)}
            />
        </View>
        <Button
          color={'green'}
          title="Submit"
          onPress={() =>
            Alert.alert('Soon you can assign items!')
          }
        />
      </View>)
  }
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Reciept" component={RecieptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {

  return (
    <View style={styles.container}>
      <MyStack />
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
