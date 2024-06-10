import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceGroupService {
  private apiUrl = 'http://localhost:3000/deviceGroups';

  constructor(private http: HttpClient) { }

  getDeviceGroups(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getDeviceGroup(deviceGroupId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${deviceGroupId}`);
  }

  addDeviceGroup(deviceGroup: any): Observable<any>{
    return this.http.post(this.apiUrl, deviceGroup);
  }

  updateDeviceGroup(deviceGroupId: string, deviceGroup: any): Observable<any>{
    return this.http.patch(`${this.apiUrl}/${deviceGroupId}`, deviceGroup);
  }

  deleteDeviceGroup(deviceGroupId: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${deviceGroupId}`);
  }

  addDeviceToDeviceGroup(deviceGroupId: string, deviceId: string): Observable<any>{
    return this.http.patch(`${this.apiUrl}/${deviceGroupId}/addDevice/${deviceId}`, {});
  }

}
