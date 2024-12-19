import {Injectable} from "@angular/core";

@Injectable()
export class RemoteAppService {
  loaded(): void {
    alert('Remote app loaded');
  }
}