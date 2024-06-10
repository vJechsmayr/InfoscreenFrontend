import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private apiUrl = 'http://localhost:3000/layouts';

  constructor(private http: HttpClient) { }

  getLayouts(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  addLayout(layout: any): Observable<any>{
    return this.http.post(this.apiUrl, layout);
  }

  addZoneToLayout(layoutId: string, zone: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/${layoutId}/zones`,zone);
  }

  assignLayout(layoutId: string, assignment: any): Observable<any>{
    return this.http.patch(`${this.apiUrl}/${layoutId}/assign`, assignment);
  }

  getlayout(layoutId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${layoutId}`);
  }

  updateLayout(layoutId: string, layout: any): Observable<any>{
    return this.http.patch(`${this.apiUrl}/${layoutId}`, layout);
  }

  deleteLayout(layoutId: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${layoutId}`);
  }
}
