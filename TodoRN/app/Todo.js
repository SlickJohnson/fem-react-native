import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  onChange(text) {
    this.setState({newTodo: text});
  }

  handlePress(evt) {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos,
      newTodo: '',
    });
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Type here!" value={this.state.newTodo} onChangeText={this.onChange.bind(this)} />
        <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
          <Text style={styles.buttonText}>Tap me!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todos}>
        {this.state.todos.map((todo, i) => (
            <View style={styles.todo} key={i}>
              <Text style={styles.todoText}>- {todo}</Text>
          </View>
        ))}
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
    fontSize: 24,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'lightgrey',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  todos: {
    marginTop: 60,
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  todoText: {
    fontSize: 24,
  }
});
