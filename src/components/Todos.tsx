import React from 'react';

import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface TodosProps {}

interface Todo {
  name: string;
  day: string;
  status: boolean;
  id: number;
}
interface TodosState {
  name: string;
  status: boolean;
  id: number | null;
  todos: Todo[];
  currentTime: string;
  date: number;
  day: string;
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const data = [
  {
    name: 'Dinner',
    day: 'Today at 8:00 PM',
    status: true,
    id: 1,
  },
  {
    name: 'Walk with coby',
    day: 'Today at 3:30 PM',
    status: false,
    id: 2,
  },
  {
    name: 'Buy Grocery',
    day: 'Today at 10:30 AM',
    status: true,
    id: 3,
  },
  {
    name: 'Go To repaired shop',
    day: 'Today at 9:30 AM',
    status: false,
    id: 4,
  },
  {
    name: 'Dinner',
    day: 'Today at 8:00 PM',
    status: true,
    id: 5,
  },
  {
    name: 'Walk with coby',
    day: 'Today at 3:30 PM',
    status: false,
    id: 6,
  },
  {
    name: 'Buy Grocery',
    day: 'Today at 10:30 AM',
    status: true,
    id: 7,
  },
  {
    name: 'Go To repaired shop',
    day: 'Today at 9:30 AM',
    status: false,
    id: 8,
  },
];
class Todos extends React.PureComponent<TodosProps, TodosState> {
  constructor(props: TodosProps) {
    super(props);
    this.state = {
      name: '',
      todos: data || [],
      id: null,
      status: false,
      currentTime: '00:00:00',
      date: 0,
      day: '',
    };
  }
  timer: any;
  updateTime = () => {
    const d = new Date();
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let date = d.getDate();
    let day = d.toDateString().split(' ')[0];

    this.setState({todos: data, currentTime: `${hrs}:${mins}`, date, day});
  };
  componentDidMount(): void {
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, (1000 * 59) / 2);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
  }
  // componentDidUpdate(
  //   prevProps: Readonly<TodosProps>,
  //   prevState: Readonly<TodosState>,
  //   snapshot?: any,
  // ): void {
  //   if (prevState.sec !== this.state.sec) {
  //     let d = new Date();
  //     let hrs = d.getHours();
  //     let mins = d.getMinutes();
  //     let sec = d.getSeconds();
  //     console.log({
  //       hrs,
  //       mins,
  //       sec,
  //     });

  //     this.setState({currentTime: `${hrs}:${mins}:${sec}`, sec});
  //   }
  // }
  AddTodo = () => {
    this.setState({
      name: '',
      todos: [
        ...this.state.todos,
        {
          name: this.state.name,
          day: '',
          id: Date.now(),
          status: this.state.status,
        },
      ],
    });
  };

  deleteTodo = (id: number) => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id),
    });
  };

  editTodo = (id: number) => {
    this.setState({
      todos: this.state.todos.map(t => {
        if (t.id === id) {
          t.status = !t.status;
        }
        return t;
      }),
    });
  };
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.imageBackground}>
          <View style={styles.backgroudView}>
            <Text style={[styles.text, styles.smallText]}>
              {this.state.day} {this.state.date}
            </Text>
            <Text style={[styles.text, styles.bigText]}>
              {this.state.currentTime} AM
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            value={this.state.name}
            placeholder="Note"
            onChangeText={(text: string) => this.setState({name: text})}
          />
          <TouchableOpacity
            style={styles.btnGreen}
            onPress={() => this.AddTodo()}>
            <Icon color="#fff" size={30} name="plus" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnGreen2} onPress={() => {}}>
            <Entypo name="chevron-down" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.mainView}>
          {this.state.todos.map((todo: Todo) => {
            return (
              <View key={todo.id} style={styles.viewTodo}>
                <View style={styles.viewText}>
                  <Text
                    style={[
                      styles.text1,
                      styles.textTodo,
                      {
                        textDecorationLine: todo.status
                          ? 'line-through'
                          : 'none',
                      },
                    ]}>
                    {todo.name}
                  </Text>
                  <Text style={[styles.text1, styles.smallTextTodo]}>
                    {todo.day}
                  </Text>
                </View>

                <TouchableOpacity onPress={() => this.editTodo(todo.id)}>
                  {!todo.status ? (
                    <Entypo name="circle" size={20} color="#20EEB0" />
                  ) : (
                    <FontAwesome5
                      name="check-circle"
                      size={20}
                      color="#20EEB0"
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.deleteTodo(todo.id)}>
                  <EvilIcons
                    name="trash-2"
                    style={{marginLeft: 10}}
                    size={20}
                    color="#FF4545"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
    fontFamily: 'Inter',
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
  btnGreen2: {
    backgroundColor: '#20EEB0',
    padding: 10,

    borderRadius: 3,
    paddingLeft: 3,
    paddingRight: 3,
    marginLeft: 3,
  },
  mainView: {
    marginTop: 20,
  },
  viewTodo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 29,
    paddingRight: 29,
    marginTop: 20,
  },
  viewText: {
    flex: 1,
  },
  text1: {fontFamily: 'Inter', fontWeight: '400'},
  textTodo: {
    color: '#0D0D0D',
    fontSize: 18,
    marginBottom: 5,
  },
  smallTextTodo: {
    color: '#888888',
    fontSize: 16,
  },
});
export default Todos;
