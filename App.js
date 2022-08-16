import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function App() {
  const goalInputHandler = () => {}

  const goalButtonHandler = () => {}
  return (
    <View style={styles.appContainer}>
      <View style={styles.inpitContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your coures goal"
        />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContaner}>
        <Text>List of goals...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inpitContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContaner: {
    flex: 4,
  },
})
