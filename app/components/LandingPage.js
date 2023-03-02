import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import {
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';
import {
  PlayfairDisplay_800ExtraBold,
} from '@expo-google-fonts/playfair-display';
import * as Font from 'expo-font';
import UploadButton from './UploadButton';

export default function LandingPage(){
    const [appIsReady, setAppIsReady] = useState(false);
    useEffect(() => {
        async function prepare() {
          try {
            // Load fonts
            Font.loadAsync({'OpenSans_800ExtraBold': OpenSans_800ExtraBold, 'PlayfairDisplay_800ExtraBold': PlayfairDisplay_800ExtraBold})

            // TODO: load other async actions here, or switch to useFonts hook if needed
          } catch (e) {
            console.warn(e);
          } finally {
            // Tell the application to render
            setAppIsReady(true);
          }
        }
    
        prepare();
      }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View style={styles.content} onLayout={onLayoutRootView}>
          <View style={styles.textBlock}>
            <Text style={styles.welcomeText}>
                Welcome to
            </Text>
            <Text style={styles.openTabText}>
                OpenTab
            </Text>
          </View>
          <View style={styles.uploadBlock}>
           <UploadButton/>
          </View>
          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
    },
    uploadBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    welcomeText: {
        fontFamily: 'OpenSans_800ExtraBold',
        fontSize: 32,
        color: '#fff',
        letterSpacing: 0.8,
        borderRadius: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    openTabText: {
        fontFamily: 'PlayfairDisplay_800ExtraBold',
        fontSize: 72,
        color: '#fff',
        letterSpacing: 0.8,
        borderRadius: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
    }
  });

