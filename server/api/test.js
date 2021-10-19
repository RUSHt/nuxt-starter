export default ( req, res ) => {
    console.log('test.js req.url',req.url);
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    return res.end('Hello World');
    return {
        statusCode: 302,
        headers: {
            'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({ msg: `you're good` }),
    }
}