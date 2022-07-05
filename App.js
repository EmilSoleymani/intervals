import { StyleSheet, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import Stopwatch from './Components/Stopwatch';
import Menu from './Components/Menu';

const screen = Dimensions.get('window')

export default function App() {
  const [stopwatch, setStopwatch] = useState(false)

  const toggleStopwatch = () => {
    setStopwatch(!stopwatch)
  }

  return (
    <View style={styles.container}>
      <Menu onClicked={toggleStopwatch}/>
      { stopwatch &&
      <Stopwatch styles={styles}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 10,
    borderColor: '#b9aaff',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 45,
    color: "#b9aaff"
  },
  timerText: {
    color: "#fff",
    fontSize: 90,
    marginBottom: 20
  },
  buttonReset: {
    marginTop: 20,
    borderColor: "#ff851b"
  },
  buttonTextReset: {
    color: "#ff851b"
  }
});
