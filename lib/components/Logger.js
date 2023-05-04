const db = require('../config/db.js')
const sequelize = require('sequelize')
const initDb = require('../models/init-models');
const Tables = initDb(db)

class Logger {
  constructor(codes=undefined) {
    this.logCodes={
      TextLog:{ code: 1, type: 'log'},
      UnknownError:{ code: 200, type: 'log'},
      QueryError:{ code: 300, type: 'debug'},
      LogIn:{ code: 400, type: 'log'},
      LogOut:{ code: 401, type: 'log'},
      Delete:{ code: 500, type: 'elimination'},
      StamperOffline:{ code: 600, type: 'log'},
      StamperOnline:{ code: 601, type: 'log'},
      KeepAliveUnknown: {code: 602, type:'log'},
      StampByUnknown: {code: 603, type:'log'},
      StampFailed: {code: 604, type:'log'},
    } // default codes
    if(codes!==undefined){ //Adds new codes or edits default codes
      Object.keys(codes).forEach(key=>this.codes[key]=codes[key])
    }
    
    
  }
  async log(description,code,tableName=null,tableId=null){ //Creates the log
    const log=await Tables.logs.create({
      type: this.logCodes[code].type,
      code: this.logCodes[code].code,
      description:description,
      table_name:tableName,
      table_id:tableId
    })
    return log
  }
 
}

module.exports = Logger