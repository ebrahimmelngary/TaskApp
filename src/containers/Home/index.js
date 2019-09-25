import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import { Button } from '../../components';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends Component {
    static navigationOptions = {
        title: "Home"
    };
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            input: ''
        };
    }
    async componentDidMount() {
        const name = await AsyncStorage.getItem("@name")
        this.setState({ name: name ? name : "" })

    }

    updateName = async () => {
        this.setState({ name: this.state.input })
        await AsyncStorage.setItem('@name', this.state.input)
            .then(()=>{
                this.setState({input:''})
                alert("Name Saved Successfully")
            })
    }
    render() {
        const { name, input } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.nameText}>{`My name: ${name}`}</Text>
                    <TextInput
                        style={styles.input}
                        maxLength={20}
                        placeholder={"Write Your Name"}
                        onChangeText={input => this.setState({ input })}
                        value={input}
                    />

                    <Button
                        title="Save"
                        onPress={this.updateName}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;