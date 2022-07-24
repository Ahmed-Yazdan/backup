import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Doctors from './Components/Doctors';
import Home from './Components/Home';

export default function App() {
  return (

    <View style={styles.container}>
        <Text>Hello worldyutuytuyt</Text>
        <Text>Hello world 2!</Text>
        <StatusBar style="auto" />
        <NativeRouter>
          <Link to='/'><Text>Home</Text></Link>
          <Link to='/home'><Text>Home</Text></Link>
          <Link to='/doctors'><Text>Doctors</Text></Link>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/doctors' element={<Doctors />}></Route>
          </Routes>
        </NativeRouter>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100
  },
});
