import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { LoaderProvider } from './contexts/LoaderContext'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spinner from 'react-native-loading-spinner-overlay';
import HomeScreen from './components/screens/HomeScreen';
import PayrollScreen from './components/screens/payroll/PayrollListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ isLoading, setIsLoading ] = useState(false);
  const toggleLoader = () => setIsLoading(!isLoading);

  useEffect(() => {
    if (isLoading) {
      toggleLoader();
    }
  });

  return (
    <LoaderProvider value={toggleLoader}>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        style={styles.spinnerStyle}
        textStyle={styles.spinnerTextStyle}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
              headerShown: false
            }}
          >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Payroll" component={PayrollScreen} />
        </Stack.Navigator>  
      </NavigationContainer>
    </LoaderProvider>
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  spinnerStyle: {
    overlayColor: "rgba(0, 0, 0, 0.75)",
  },
});
