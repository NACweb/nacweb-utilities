const NodeGeocoder = require('node-geocoder');

// returns the coordinates of an address or undefined if there are no coordinates
exports.addressToCoords = async (address) => {
  try {
    const geocoder_options = {
      provider: 'openstreetmap', //Select the API provider
    };

    const geocoder = NodeGeocoder(geocoder_options);

    const geo_res = await geocoder.geocode(address); //gets the coordinates
    if (geo_res.length > 0) { //If coordinates are returned
      return [geo_res[0].latitude, geo_res[0].longitude]
    } else { // Coordinates not found
      return undefined
    }
  }
  catch (err) {
    //console.log(err.message)
    return undefined
  }
}

exports.coordsToAddress = async (longitude, latitude) => {
  try {
    const geocoder_options = {
      provider: 'openstreetmap', //Select the API provider
    };

    const geocoder = NodeGeocoder(geocoder_options);

    const geo_res = await geocoder.reverse({lon:longitude, lat:latitude}); //gets the coordinates
    if (geo_res.length > 0) { //If coordinates are returned
      return geo_res[0]
    } else { // Coordinates not found
      return undefined
    }
  }
  catch (err) {
    //console.log(err.message)
    return undefined
  }
}