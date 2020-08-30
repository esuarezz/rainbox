exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: createPaletteRainbowColors(),
    };
    console.log("response ",response)
    return response;
};


const createPaletteRainbowColors = () => {
    return Array(5).fill().map(() => generateRandomHexaColor())
}

const generateRandomHexaColor = () => {
    return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
}