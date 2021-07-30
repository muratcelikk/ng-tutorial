import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordServiceService {
  info1: string[] = ["Murat Çelik", 'E345', 'mc@abc.com']
  info2: string[] = ["Selma Duman", 'E755', 'sd@abc.com']
  info3: string[] = ["Verda Altın", 'E487', 'va@abc.com']

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }

  constructor() { }
}
