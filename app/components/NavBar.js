import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

export default function NavBar(){
    return (
        <View style={styles.navbar}>
            <Icon.Button
                name="bars"
                backgroundColor="transparent"
            >
            </Icon.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
      paddingTop: '5%',
      padding: '2%',
      alignItems: 'left',
      justifyContent: 'left',
    },
  });

