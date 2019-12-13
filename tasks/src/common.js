import { Alert, Platform } from 'react-native';

const server = Platform.OS === 'ios' ? 'http://localhost:3001' : 'http://10.0.2.2:3001';

function showError(err) {
    Alert.alert('Ops! Ocorreu um problema! ', `Mensagem ${err}`);
}

export { server, showError };