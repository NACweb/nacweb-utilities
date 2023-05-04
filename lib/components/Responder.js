class Responder {
  constructor(res, internal=false, codes=undefined) {
    this.res = res
    this.internal=internal
    this.codes={
      ok: 200,
      badRequest: 400,
      unauthorized: 401,
      notFound: 404,
      requestTimeout: 408,
      sessionExpired: 419,
      malformedRequest: 488,
      tokenExpired: 499,
      internalServerError: 500,
      sessionNotFound: 502,
      deleteDependency: 503,
    }
    if(codes!==undefined){
        Object.keys(codes).forEach(key=>this.codes[key]=codes[key])
    }
  }
  ok(response, code = this.codes.ok) {
    if(this.internal){
      return
    } 
    this.res.status(code).send(response)
  }
  badRequest(response, code = this.codes.badRequest) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  unauthorized(response, code = this.codes.unauthorized) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  notFound(response, code = this.codes.notFound) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  requestTimeout(response, code = this.codes.requestTimeout) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  sessionExpired(response, code = this.codes.sessionExpired) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  malformedRequest(response, code = this.codes.malformedRequest) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  tokenExpired(response, code = this.codes.tokenExpired) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  internalServerError(response, code = this.codes.internalServerError) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  sessionNotFound(response, code = this.codes.sessionNotFound) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  deleteDependency(response, code = this.codes.deleteDependency) {
    if(this.internal){
      return
    }
    this.res.status(code).send(response)
  }
  
}

module.exports =Responder