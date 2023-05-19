import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public global: IGlobal;
  constructor() {
    this.global = { isSignedIn: false };
  }
}

export interface IGlobal {
  isSignedIn: boolean;
}
