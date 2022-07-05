import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';

const formatNumber = (number) => `0${number}`.slice(-2)

const getRemaining = (time) => {
  const mins = Math.floor(time / 60)
  const secs = time % 60
  return { mins: formatNumber(mins), secs: formatNumber(secs) }
}

export default function Stopwatch({styles}){
    const [remainingSecs, setRemainingSecs] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const { mins, secs } = getRemaining(remainingSecs)
  
    const toggle = () => {
      setIsActive(!isActive)
    }
  
    const reset = () => {
      setIsActive(false)
      setRemainingSecs(0)
    }
  
    useEffect(() => {
      let interval = null
      if(isActive){
        interval = setInterval(() => {
          setRemainingSecs(remainingSecs => remainingSecs + 1)
        }, 1000)
      }else if(remainingSecs !== 0){
        clearInterval(interval)
      }
  
      return () => clearInterval(interval)
    }, [isActive, remainingSecs])
  
    return (
      <View style={styles.container}>
        <StatusBar style="light-content"/>
        <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
        <TouchableOpacity onPress={toggle} style={styles.button}>
          <Text style={styles.buttonText}>{isActive ? `Pause` : `Start`}</Text>
        </TouchableOpacity>
        { (remainingSecs || isActive) > 0 &&
        <TouchableOpacity onPress={reset} style={[styles.button, styles.buttonReset]}>
          <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
        </TouchableOpacity>
        }
      </View>
    );  
}
