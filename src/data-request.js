import { AsyncStorage } from 'react-native';

const storageAppPrefix = '@rnSchedule';
const dataServerDomain = 'https://node-schedule.herokuapp.com';

export const getSchedule = async (university, groupId) => {
    let data = await AsyncStorage
        .getItem(`${storageAppPrefix}:schedule`)
        .catch(() => null);

    if (!data) {
        data = await fetch(`${dataServerDomain}/${university}/${groupId}`)
            .then(response => response.json())
            .then(data => JSON.stringify(data));
        AsyncStorage.setItem('@rnSchedule:schedule', data);
    }
    return JSON.parse(data);
}