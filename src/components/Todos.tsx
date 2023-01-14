import React from 'react';

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
interface TodosProps {}

interface Todo {
  name: string;
  id: string;
  status: 'Pending' | 'Completed' | 'Waiting';
}
interface TodosState {
  name: string;
  todos: Todo[];
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class Todos extends React.Component<TodosProps, TodosState> {
  constructor(props: TodosProps) {
    super(props);
    this.state = {name: '', todos: []};
  }
  render() {
    return (
      <>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.imageBackground}>
          <View style={styles.backgroudView}>
            <Text style={[styles.text, styles.smallText]}>Thu 9</Text>
            <Text style={[styles.text, styles.bigText]}>6:23 AM</Text>
          </View>
        </ImageBackground>

        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            value={this.state.name}
            placeholder="Note"
            onChangeText={(text: string) => this.setState({name: text})}
          />
          <TouchableOpacity style={styles.btnGreen}>
            <Icon color="#fff" size={30} name="plus" />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  imageBackground: {
    width: width,
    height: height / 3,
    position: 'relative',
  },
  backgroudView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingRight: 30,
  },
  text: {
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Russo One',
  },
  smallText: {
    fontSize: 18,
    lineHeight: 22,
  },
  bigText: {
    lineHeight: 58,

    fontSize: 48,
  },
  textInput: {
    backgroundColor: '#EBEFF2',
    flex: 1,
    height: height / 18,
    color: '#888888',

    borderRadius: 3,
    marginRight: 10,
    textTransform: 'capitalize',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    lineHeight: 18,
  },
  viewTextInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    marginTop: 20,
    paddingLeft: 29,
    paddingRight: 28,
    alignItems: 'center',
  },
  btnGreen: {
    backgroundColor: '#20EEB0',
    padding: 10,
    borderRadius: 3,
  },
});
export default Todos;
