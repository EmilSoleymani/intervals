import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';

const screen = Dimensions.get('window')

export default function Menu({onClicked}){
  return (
    <View>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity onPress={onClicked} style={styles.button}>
            <Text style={styles.buttonText}>Stopwatch</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        color: "#fff",
        fontSize: 35,
        textAlign: 'center'
    },
    button: {
        borderColor: '#fff',
        borderWidth: 3,
        width: screen.width / 2,
        height: screen.width / 6,
        borderRadius: screen.width / 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    buttonText: {
        fontSize: 30,
        color: "#fff"
    }
});

