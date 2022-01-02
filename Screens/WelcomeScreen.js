import React from 'react';
import {Text, View,Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {configs} from '../config';

const WelcomeScreen = ({navigation}) => {
  const { colors } = configs;

  const handleButtonPress = ()=>{
      navigation.navigate("Home");
  }


  function image(){
    return (
      <Image style={styles.image} source = {require("../assets/illustrations/get_started.jpg")}/>    )
  }

  function button (){
    return (
      <View>
        <TouchableOpacity onPress={handleButtonPress} activeOpacity={0.7} style= {styles.buttonOpacity}>
          <Text style= {styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[configs.colors.primary, configs.colors.secondary]}>
      <View style={styles.parent}>

        <View style={styles.top}>
          {image()}
        </View>

        <View style={styles.bottom}>
          <Text style= {styles.desc}>The only personal finance app you need to monitor you spending's</Text>
          {button()}
        </View>
      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 30
  },
  top: {
    flex: 1.4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    flex: 1,
    alignContent:'center',
    justifyContent: 'space-around'
  },
  desc:{
    color: configs.colors.white,
    fontSize: 22,
    fontFamily: 'Mukta-Bold',
    textAlign: 'center'
  },
  buttonOpacity:{
    height: 50,
    backgroundColor: configs.colors.white,
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize: 20,
    color: configs.colors.primary,
    fontFamily: 'Mukta-Bold'
  },
  image:{
    width: '70%',
    height: '70%',
    borderRadius: 50
  }
});

export default WelcomeScreen;
