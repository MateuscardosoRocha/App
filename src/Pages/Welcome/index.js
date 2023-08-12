import React from 'react';
import { View, StyleSheet, TextInput, ImageBackground, Image,Text, KeyboardAvoidingView  } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">

            <ImageBackground source={require('../../assets/bg.jpg')} style={{height: 600}}>
                <View style={styles.background}>

                <Image source={require('../../assets/logo.png')} style={styles.logo}/>
                <Text style={styles.title}>Entre para o {'\n'}  Universo Two Dogs</Text>
                </View>


            </ImageBackground>
            
        </KeyboardAvoidingView>

      </View>
      <View style={styles.lowerView}>

        <TextInput placeholder='Testeeee' style={styles.input}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  
  upperView: {
    flex: 0.7,
  },


  background:{
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo:{
    width: 350,
    height: 250,
    resizeMode: 'contain'
    
  },

  title:{
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  lowerView: {
    flex: 0.3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },


  input:{
    
    backgroundColor: 'red',
    width: 300,
    padding: 10,
   
 
  }
});



export default Welcome;