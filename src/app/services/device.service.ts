import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://localhost:3000/devices';

  constructor(private http: HttpClient) { }

  getDevics(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  addDevice(device: any): Observable<any>{
    return this.http.post(this.apiUrl, device);
  }

  updateDevice(deviceId: string, device: any): Observable<any>{
    return this.http.patch(`${this.apiUrl}/${deviceId}`, device);
  }

  deleteDevice(deviceId: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${deviceId}`);
  }
}
