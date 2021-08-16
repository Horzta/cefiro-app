import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CButton from './../parts/core/CButton';
import LoaderContext from './../../contexts/LoaderContext';


export default function BuddyClock(props) {
    const [time, setTime] = useState(formatDateTime(new Date()));
    const [lastTimeRecord, setLastTimeRecord] = useState({
        timeRecord: formatDateTime(new Date()),
        isClockedIn: false,
    });

    const toggleLoader = useContext(LoaderContext);



    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        }
    });

    function tick() {
        setTime(formatDateTime(new Date()));
    }

    function formatDateTime(time) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dows   = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday", " Sunday"];

        return {
            dow: dows[time.getDay()],
            year: time.getFullYear(),
            month: months[time.getMonth()],
            day: time.getDate(),
            hour: String(time.getHours()).padStart(2, "0"),
            minute: String(time.getMinutes()).padStart(2, "0"),
            second: String(time.getSeconds()).padStart(2, "0"),
        };
    }
    
    function formatLastTimeRecord() {
        const {isClockedIn, timeRecord } = lastTimeRecord;

        return "Last" + (isClockedIn ? " Clock In " : " Clock Out ") + "on " +
        timeRecord['dow'] + " " + timeRecord['month'] + " " +
        timeRecord['day'] + " " + timeRecord['year'] + " " +
        timeRecord['hour'] + ":" + timeRecord['minute'];         
    }


    function clockIn() {
        toggleLoader();
        setLastTimeRecord({
            timeRecord: time,
            isClockedIn: true,
        });
    }

    function clockOut() {
        toggleLoader();
        setLastTimeRecord({
            timeRecord: time,
            isClockedIn: false,
        });
    }

    return (
        <View style={styles.container}>
            <Text
            style={{
                fontSize: 25,
                fontWeight: "bold",
            }}
            >
                {time['dow']} {time['month']} {time['day']}, {time['year']}
            </Text>
            <Text
                style={{
                    fontSize: 75,
                    fontWeight: "bold",
                }}
            >
                {time['hour']}:{time['minute']}:{time['second']}
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    marginBottom: 20,
                }}
            >
                { formatLastTimeRecord() }
            </Text>
            { lastTimeRecord['isClockedIn'] ?
                <CButton 
                    title="TIME OUT"
                    onPress={clockOut}
                    style={{
                        paddingVertical: 40,
                        backgroundColor: 'red',
                    }}
                /> : 
                <CButton 
                    title="TIME IN"
                    onPress={clockIn}
                    style={{
                        paddingVertical: 40,
                        backgroundColor: '#5eba7d',
                    }}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 50,
    },
  });
  