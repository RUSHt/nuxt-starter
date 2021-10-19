export default ( req, res ) => {
    console.log('test.js req.url',req.url);
    res.end('Hello World');
}