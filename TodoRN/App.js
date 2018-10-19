import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
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
      newTodo: ''
    });
  }

  render() {
    return (
      <View>
        <TextInput 
          placeholder="Type here!"
          value={this.state.newTodo}
          onChangeText={this.onChange.bind(this)} />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>Tap me!</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, i) => (
            <Text key={i}>- {todo}</Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
