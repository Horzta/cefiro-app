import React from 'react';
import { StyleSheet, View } from 'react-native';
import CButton from '../parts/core/CButton';
import BuddyClock from '../segment/BuddyClock';


export default function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
          <BuddyClock />
          <CButton 
            title="Payroll"
            onPress={()=> navigation.navigate('Payroll')}
          />
          <CButton 
            title="Timesheet"
            onPress={()=> {}}
          />
          <CButton 
            title="Overtime"
            onPress={()=> {}}
          />
          <CButton 
            title="Leaves"
            onPress={()=> {}}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
