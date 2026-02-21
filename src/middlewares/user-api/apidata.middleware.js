export const getParamsAndQuery = (req, res, next) =>{
    const { rootRoute, tag } = req.params
    const query = req.query || {}
    query.rootRoute = rootRoute
    query.tag = tag
    req.queries = query
    next()
}

export const attachRouteAndTag = (req, res, next)=>{
    const { rootRoute, tag } = req.params
    req.body.rootRoute = rootRoute
    req.body.tag = tag
    next()
}