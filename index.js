const {getServerStatus} = require('./apis/server');

module.exports = {
  findServer(serverList){
    // calling all promise
    return Promise.all(serverList.map(getServerStatus)).then(allServers=>{

      let onlineServers = allServers.filter(server=>server.isServerOnline);
      
      if(!onlineServers.length) throw new Error('No Online Server Found');
      else if(onlineServers.length == 1) return onlineServers[0];
      else {
        onlineServers = onlineServers.sort((a, b)=> a.priority - b.priority);
        return onlineServers[0]
      }
    }).catch(()=>{
      return new Error('No Online Server Found');
    })
  }
}