import React, { Component } from 'react'
import { ImageBackground, StatusBar } from 'react-native'
import { IMAGES } from '../../common';
import styles from './styles'

class Splash extends Component {
    static navigationOptions = {
        header:null
      };
      componentDidMount (){
          setTimeout(() => {
              this.props.navigation.navigate("Home")
          }, 3000);
      }
    
    render() {
        return (
            <ImageBackground source={IMAGES.splash}  style={styles.container} >
                <StatusBar barStyle={"dark-content"} />
            </ImageBackground>
        )
    }
}

export default Splash;