import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';
import commonStyles from '../commonStyles';

function Task(props) {   

    const descStyle = props.doneAt !== null ? 
        { textDecorationLine: 'line-through' } : {};

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}> 
                { props.doneAt ? 
                    <View style={styles.done}>
                        <Icon name='check' size={20} color={commonStyles.colors.secondary} />
                    </View> : 
                    <View style={styles.pending}></View>
                }
            </View>
            <View>
                <Text style={[styles.description, descStyle]}>
                    {props.desc}
                </Text>
                <Text style={styles.date}>
                    {moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM')}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    done: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#4d7031',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555',
    },
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    description: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,
    },
});

export default Task;
