export default ( req, res ) => {
    console.log('test.js req.url',req.url);
    return {
        statusCode: 302,
        headers: {
            'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({ msg: `you're good` }),
    }
}