import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Error: ', e);
    }
};

export const getItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (e) {
        console.error('Error: ', e);
        return null;
    }
};

export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error('Error: ', e);
    }
};

export const clear = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        console.error('Error clearing AsyncStorage: ', e);
    }
};

export const getAllKeys = async () => {
    try {
        return await AsyncStorage.getAllKeys();
    } catch (e) {
        console.error('Error: ', e);
        return [];
    }
};

export const getAllItems = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
        return items.reduce((acc, [key, value]) => {
            acc[key] = JSON.parse(value);
            return acc;
        }, {});

    } catch (e) {
        console.error('Error getting all items: ', e);
        return {};
    }
};