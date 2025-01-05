import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getData(id: string) {
  try {
    const val = await AsyncStorage.getItem(id);
    return val ? JSON.parse(val) : null;
  } catch {
    return null;
  }
}

export async function saveData(id: string, data: object) {
  try {
    const val = JSON.stringify(data);
    await AsyncStorage.setItem(id, val);
  } catch {
    return null;
  }
}
