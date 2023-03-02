import { StyleSheet, Pressable, Text, Alert } from 'react-native';
import {
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';

// TODO: Make the button actually have padding and color
export default function UploadButton(){
    const [fontsLoaded] = useFonts({
        'OpenSans_800ExtraBold': OpenSans_800ExtraBold,
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return (
        <Pressable style={styles.uploadButton} onPress={() => Alert.alert('Soon you can upload a receipt!')}>
            <Text style={styles.uploadButtonText}>{"Upload receipt"}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    uploadButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        color: 'black',
    },
    uploadButtonText: {
        color: '#fff',
    },
  });

