const healthMiddleware = function (req, res, next) {
    res.statusCode = 200
    res.end('ok')
}

export default healthMiddleware
