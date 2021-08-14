import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Task from './Task'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'

export default function LocationSave() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }])
      setValue('')
    }
  }

  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true
      })
    )
  }

  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked
        return todo
      })
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline
          onChangeText={(value1) => setValue(value1)}
          placeholder="Add Your Location Here📍"
          placeholderTextColor="#000000"
          value={value}
        />
        <TouchableOpacity onPress={() => handleAddTodo()}>
          <Icon name="plus" size={30} color="#900" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {todos.map((task) => (
          <Task
            text={task.text}
            key={task.key}
            checked={task.checked}
            setChecked={() => handleChecked(task.key)}
            delete={() => handleDeleteTodo(task.key)}
          />
        ))}
      </ScrollView>
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 30,
    flex: 1,
    minHeight: '7%',
    marginTop: '10%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingLeft: 10,
  },
  taskWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
    // alignItems: 'baseline',
    borderColor: '#000000',
    borderBottomWidth: 0.7,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: '#000000',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5,
  },
})
