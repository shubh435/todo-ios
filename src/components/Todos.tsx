import React from 'react';
import {Dimensions, ImageBackground, Text, View} from 'react-native';
interface TodosProps {}

interface TodosState {}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class Todos extends React.Component<TodosProps, TodosState> {
  constructor(props: TodosProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* <Text>App</Text> */}

        <ImageBackground
          source={require('../assets/background.png')}
          style={{
            width: width,
            height: height / 3,
            position: 'relative',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              paddingBottom: 5,
              paddingRight: 5,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '400',
                fontFamily: 'Russo One',
              }}>
              Thu 9
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 30,
              }}>
              6:23 AM
            </Text>
          </View>
        </ImageBackground>
      </>
    );
  }
}

export default Todos;
