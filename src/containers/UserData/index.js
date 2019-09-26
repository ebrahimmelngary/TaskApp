import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import styles from './styles';
import { COLORS } from '../../common';
import { Button } from '../../components';

class UserData extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "User Data",

        }
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        };
    }

    componentDidMount() {

        this.fetchData()
    }

    fetchData = async () => {

        try {
            const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'GET',

            });

            return this.setState({ data: await result.json(), loading: false })

        } catch (error) {
            return alert("ERROR IN CONNECTION");
        }
    }
    render() {
        console.log("data", this.state.data);
        const { data, loading } = this.state;

        return (
            <View style={styles.container}>
                {!loading && data ?
                    <FlatList
                        data={data}
                        keyExtractor={item => JSON.stringify(item)}

                        renderItem={({ item }) => {
                            console.log("object", item);
                            return <View style={styles.itemView}>
                                <Text>{`User Id : ${item.userId}`}</Text>
                                <Text>{`Title : ${item.title}`}</Text>
                            </View>
                        }}
                    />
                    : <View style={styles.loading}>
                        <ActivityIndicator color={"red"} size={'large'} />
                    </View>
                }
            </View>
        );
    }
}

export default UserData;