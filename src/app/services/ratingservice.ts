import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable()
export class RatingService {
  constructor(private httpClient: HttpClient) {
  }

  public getRatingInfo(id: number): Observable<any> {
    return this.httpClient.get('https://dora-arts-api.herokuapp.com/api/v1' + id);
  }

  public getRatings(): Observable<any> {
    return this.httpClient.get('https://dora-arts-api.herokuapp.com/api/v1');
  }

  public saveUser(user: User): Observable<any> {
    return this.httpClient.post('https://dora-arts-api.herokuapp.com/api/v1/upload', user);
  }

  public getCourses(): Observable<any> {
    return this.httpClient.get('https://dora-arts-api.herokuapp.com/api/v1/courses');
  }
}
