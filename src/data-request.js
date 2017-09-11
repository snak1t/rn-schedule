import { AsyncStorage } from 'react-native';

const storageAppPrefix = '@rnSchedule';

export const getSchedule = async (university, groupId) => {
    let data = await AsyncStorage
        .getItem(`${storageAppPrefix}:schedule`)
        .catch(() => null);

    if (!data) {
        data = await fetch(`http://10.19.9.203:3000/${university}/${groupId}`)
            .then(response => response.json())
            .then(data => JSON.stringify(data));
        AsyncStorage.setItem('@rnSchedule:schedule', data);
    }
    return JSON.parse(data);
}