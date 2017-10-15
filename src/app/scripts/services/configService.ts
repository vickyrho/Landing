import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {IpConfig} from './ipConfig';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ConfigService {

  ipConfig : IpConfig;

  constructor(private http: Http) {
    this.ipConfig = new IpConfig();
  }

  public BaseURI() {
    const ipInfo = this.ipConfig.getIP();
    /*return 'http://' + ipInfo.server + ':' + ipInfo.port;*/
    return 'https://api.myjson.com/bins/ollwx';
  };


  private handleError (error: Response){
    return Observable.throw(error);
  }
}
