export class IpConfig {
  ipDetails: any;
  ipData: any;
  constructor() {
    this.ipData = {
      port : {},
      server : {}
    };

    this.ipData.server = {
      'qa' : '11',
      'prod' : '22'
    };

    this.ipData.port = {
      'local' : '8080',
      'prod' : '8000'
    };

    this.ipDetails = {
      "server" : this.ipData.server.qa,
      "port"   : this.ipData.port.local
    }
  };

  getIP() {
    return this.ipDetails;
  }
}
