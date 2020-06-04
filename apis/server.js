const axios = require('axios');

// checking server status and returning promise
let getServerStatus = (data) => {
  // settingup timeout for server response
  let option = { timeout: 5000 }
  
  //if server is online
  let serverOnlineResponse = {isServerOnline: true, ...data};
  //if server is offline
  let serverOfflineResponse = {isServerOnline: false, ...data};
    
  return axios.get(data.url, option).then(({status})=>{
    if(status >=200 && status <=299) return serverOnlineResponse;
    else return serverOfflineResponse;
  }).catch(err=>{
    return serverOfflineResponse;
  })
}

module.exports = {
  getServerStatus
}