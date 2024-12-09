export function transformArray(inputArray) {
    return inputArray.map(item => ({
        id: item.deviceId,
        text: item.label
    }));
}