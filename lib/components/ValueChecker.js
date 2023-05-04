class ValueChecker {
  constructor(messages) {
    this.messages={
      int: "%&name%& must be an Int",
      float: "%&name%& must be a Float",
      length: "%&name%& maximun length is %&maxlen%&",
      regex: "Please enter a valid %&name%&",
      enum: "%&name%& isn't in the accepted values",
      mustExist: "%&name%& needed",
      mustNotExist: "%&name%& can't be assigned",
      date: "Wrong date format on %&name%&",
    }
    if(messages!==undefined){
      Object.keys(messages).forEach(key=>this.messages[key]=messages[key])
    }
  }
  isInt = (value) => {
    let x;
    if (isNaN(value)) {
      return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
  }
  isFloat = (value) => {
    let x;
    if (isNaN(value)) {
      return false;
    }
    return true
  }
  capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  validate(values, fieldDefs){
    let errors=[]
    let success=true
    let message=""
    Object.keys(fieldDefs).forEach(key=>{
      if(values.hasOwnProperty(key)&&values[key]!==undefined&&values[key]!==null){
        if(fieldDefs[key].hasOwnProperty('mustNotExist')){
          errors.push({
            message: this.messages.mustNotExist.replace("%&name%&",this.capitalizeFirst(key)),
            field: key
          })
          success=false
        }
        if(fieldDefs[key].hasOwnProperty('int')){
          if(values[key]===true){
            values[key]=1
          }
          if(values[key]===false){
            values[key]=0
          }
          if(!this.isInt(values[key])){
            errors.push({
              message: this.messages.int.replace("%&name%&",this.capitalizeFirst(key)),
              field: key
            })
            success=false
          }
        }
        if(fieldDefs[key].hasOwnProperty('float')){
          if(!this.isFloat(values[key])){
            errors.push({
              message: this.messages.float.replace("%&name%&",this.capitalizeFirst(key)),
              field: key
            })
            success=false
          }
        }
        if(fieldDefs[key].hasOwnProperty('length')){
          if(values[key].length>fieldDefs[key].length){
            errors.push({
              message: this.messages.length.replace("%&name%&",this.capitalizeFirst(key)).replace("%&maxlen%&",fieldDefs[key].length.toString()),
              field: key
            })
            success=false
          }
        }
        if(fieldDefs[key].hasOwnProperty('regex')){
          values[key]=fieldDefs[key].preValidator(values[key])
          if(fieldDefs[key].regex.test(values[key])){
            errors.push({
              message: this.messages.regex.replace("%&name%&",this.capitalizeFirst(key)),
              field: key
            })
            success=false
          }
        }
        if(fieldDefs[key].hasOwnProperty('enum')){
          if(!fieldDefs[key].enum.includes(values[key])){
            errors.push({
              message: this.messages.enum.replace("%&name%&",this.capitalizeFirst(key)),
              field: key
            })
            success=false
          }
        }
        if(fieldDefs[key].hasOwnProperty('date')){
          if(fieldDefs[key].hasOwnProperty('format')){
            let suc=true
            suc=(values[key].length===fieldDefs[key].format.length)
            for(let index=0; index<values[key].length;index++){
              if(fieldDefs[key].format[index]==='Y'&&(!this.isInt(values[key][index] || values[key][index]<0))) {suc=false; console.log('Wrong year')}
              if(fieldDefs[key].format[index]==='M'&&(!this.isInt(values[key][index] || values[key][index]<0))) {suc=false; console.log('Wrong month')}
              if(fieldDefs[key].format[index]==='D'&&(!this.isInt(values[key][index] || values[key][index]<0))) {suc=false; console.log('Wrong day')}
              if (!['Y','M','D'].includes(fieldDefs[key].format[index])&&fieldDefs[key].format[index]!==values[key][index]) {suc=false; console.log('Wrong divider',fieldDefs[key].format[index],values[key][index]  )}
            }
            if(!suc){
              errors.push({
                message: this.messages.enum.replace("%&name%&",this.capitalizeFirst(key)),
                field: key
              })
              success=false
            }
          }
        }
      } else {
        if(fieldDefs[key].hasOwnProperty('mustExist')){
          errors.push({
            message: this.messages.mustExist.replace("%&name%&",this.capitalizeFirst(key)),
            field: key
          })
          success=false
        }
      }
    })
    return {errors:errors,success:success,message:message}
  }
  
}

module.exports =ValueChecker

/* EXAMPLE CHECKER

  const valueChecker = new ValueChecker()
  const checkFields = {
    requiredvalue: { mustExist: true },
    varcharvalue: { length: 150 },
    intvalue: { int: true},
    floatvalue: { float: true },
    enumvalue: { enum: ['option', 'option', 'option', 'option'] },
    regexvalue: {preValidator: (value) => { return pre validation func }, regex: /^regex expression$/ },
    unwantedvalue: { mustNotExist: true },
  }
  const checkRes = valueChecker.validate(req.body, checkFields)
  if (!checkRes.success) {
    response.errors = checkRes.errors
    response.message = checkRes.message
    responder.badRequest(response)
    return
  }

*/