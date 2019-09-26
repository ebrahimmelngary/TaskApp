import { StyleSheet } from 'react-native'
import { COLORS } from '../../common'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.main

    },
    itemView: {
      borderRadius:5,
      borderWidth:1,
      margin:5,
      backgroundColor:'#fafafa',
      padding:5
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles;