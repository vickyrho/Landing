import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {ConfigService} from './configService';
import {IpConfig} from './ipConfig';

@Injectable()
export class MainService {

  ipConfig: IpConfig;

  constructor(private http: Http,
              private configService: ConfigService){
    this.ipConfig = new IpConfig();
  }

  SampleAPI(): Observable<any> {

    return this.http.get(this.configService.BaseURI())
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError (error: Response){
    return Observable.throw(error);
  }
}
