export function tocelciouss(temperature) {
    return (temperature * (9 / 5)) + 32;
}

export function tofaherant(temperature) {
    return (temperature - 32) * (5 / 9);
}

export function toconvert(value, tooconvert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return null;
       
    }
    const output = tooconvert(input)
    const roundOutput = Math.round(output * 1000) / 1000;
    return roundOutput.toString();
}