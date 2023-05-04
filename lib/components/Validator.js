
exports.Validator=class {
  username(value) {
    const usernamePattern = /^[a-z][a-z0-9_]{1,24}$/;
    const trueValue = String(value).trim().toLowerCase();
    if (!usernamePattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  edison(value){
    const edisonPattern = /^[0-9]{2}[A-Z0-9]{4}$/;
    const trueValue=String(value).trim().toUpperCase();
    if (!edisonPattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  description(value){
    const descriptionPattern = /^\t\r\n]{149}$/
    const trueValue=String(value).trim();
    if (!descriptionPattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  name_surname(value){
    const name_surnamePattern = /^[a-zA-Z0-9àèéìòù'.\s]{100}$/
    const trueValue=String(value).trim().toLowerCase();
    if (!name_surnamePattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  role(value){
    const rolePattern = /^[^\t\r\n]{150}$/
    const trueValue=String(value).trim();
    if (!rolePattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  password(value){
    const passwordPattern = /^(?=.*?[A-Z])(?=(.*[a-z])+)(?=(.*[\d])+)(?=(.*[\W])+)(?!.*\s).{8,}$/
    const trueValue=String(value).trim();
    if (!passwordPattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  idAddress(value){
    const idAddressPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    const trueValue=String(value).trim();
    if (!idAddressPattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  serialNumber(value){
    const serialNumberPattern = /^[a-fA-F0-9]{1,50}$/
    const trueValue=String(value).trim();
    if (!serialNumberPattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  vatNumber(value){
    const vatNumberPattern = /^[0-9]{11}$/
    const trueValue=String(value).trim();
    if (!vatNumberPattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  fiscalCode(value){
    const fiscalCodePattern = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/
    const trueValue=String(value).trim();
    if (!fiscalCodePattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  filename(value){
    const filenamePattern = /^[\-\s\.\w()]+$/
    const trueValue=String(value).trim();
    if (!filenamePattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
  mqttTopic(value){
    const mqttTopicPattern = /^[a-zA-Z0-9_\-\/\\\\]+$/
    const trueValue=String(value).trim();
    if (!mqttTopicPattern.test(trueValue)) {
      return [false]
    }
    return [true,trueValue]
  }
}



exports.supported=`
List of supported regex

   const DESCRIPTION = "[^\t\r\n]+";  //"[^,;\r\n]+";
   const NAME = "[a-zA-Z0-9àèéìòù'.\s]+";
   const SURNAME = "[a-zA-Z0-9àèéìòù'.\s]+";
   const ROLE = "[^\t\r\n]+";  //"[^,;\r\n]+";
   const PASSWORD = "(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}";
   const CODE = "[0-9]{1,50}";  //"[0-9a-zA-Z]+";
   const TOKEN = "[^\r\n]+";
   const USERNAME = "[a-z0-9._\-]+"; 

   const IP_ADDRESS = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";

   const ADDRESS = "[a-zA-Z0-9àèéìòù'.\s\-,;()]+";  //-,;()
   const SERIAL_NUMBER = "[a-fA-F0-9]{1,50}";
   const VAT_NUMBER = "[0-9]{11}";
   const FISCAL_CODE ="[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]";
   const FILENAME = "[\-\s\.\w()]+"; 
   const JOB_FILE_DIRECTORY = "[\-\s\w]+"; 
   const TOPIC = "[a-zA-Z0-9_\-\/\\\\]+";

   `
