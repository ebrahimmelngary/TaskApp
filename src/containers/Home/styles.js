import { StyleSheet } from "react-native";
import { COLORS } from "../../common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc'
    },
    nameText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    input: {
        borderWidth: 0.5,
        width: "80%",
        padding: 15,
        borderRadius: 5,
        color: COLORS.main
    },
    content: {
        height: '70%',
        width: "100%",
        justifyContent: "space-around",
        alignItems: 'center'
    }

})

export default styles;