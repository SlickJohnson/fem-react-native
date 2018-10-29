import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  componentWillMount() {
    fetch("http://0935c310.ngrok.io/todos", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  onChange(text) {
    this.setState({ newTodo: text });
  }

  handlePress(evt) {
    fetch("http://0935c310.ngrok.io/todos", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        const todos = [...this.state.todos, data];
        this.setState({ todos, newTodo: "" });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Type here!"
            value={this.state.newTodo}
            onChangeText={this.onChange.bind(this)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handlePress.bind(this)}
          >
            <Text style={styles.buttonText}>Tap me!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View style={styles.todo} key={i}>
              <Text style={styles.todoText}>{todo.name}</Text>
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
    padding: 20
  },
  form: {
    flexDirection: "row"
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: "lightgrey",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  todos: {
    marginTop: 60
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey"
  },
  todoText: {
    fontSize: 24
  }
});
