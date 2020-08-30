exports.handler = async (event) => {

    const response = {
        statusCode: 200,
        body: JSON.stringify('Array with some colors in hexa'),
    };
    return response;
};
