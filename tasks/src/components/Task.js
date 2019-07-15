import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';
import commonStyles from '../commonStyles';
import Swipeable from 'react-native-swipeable';

function Task(props) {   

    const descStyle = props.doneAt !== null ? 
        { textDecorationLine: 'line-through' } : {};

    const leftContent = (
        <View style={styles.exclude}>
            <Icon name="trash" size={20} color="#fff" />
            <Text style={styles.execludeText}>Excluir</Text>
        </View>
    );

    const rightContent = [
        <TouchableOpacity style={[styles.exclude, { justifyContent: 'flex-start', padding: 20 }]}
            onPress={() => props.onDelete(props.id)}>

            <Icon name="trash" size={30} color="#fff" />
        </TouchableOpacity>
    ];

    return (
        <Swipeable leftActionActivationDistance={200} 
            onLeftActionActivate={() => props.onDelete(props.id)}
            leftContent={leftContent} rightButtons={rightContent}>

            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                    <View style={styles.checkContainer}> 
                        { props.doneAt ? 
                            <View style={styles.done}>
                                <Icon name='check' size={20} color={commonStyles.colors.secondary} />
                            </View> : 
                            <View style={styles.pending}></View>
                        }
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.description, descStyle]}>
                        {props.desc}
                    </Text>
                    <Text style={styles.date}>
                        {moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
                    </Text>
                </View>
            </View>
        </Swipeable>
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
    exclude: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    execludeText: {
        fontFamily: commonStyles.fontFamily,
        color: '#fff',
        fontSize: 20,
        margin: 10,
    },
});

export default Task;
