// eslint-disable-next-line import/no-cycle
import { data } from './index';

export class SendRequest {
  constructor(public adress: string) { }

  async getRequest(keyObj: string) {
    const request = this.adress;
    const res = await fetch(request);
    const dataRequest: any = await res.json();

    data[keyObj] = dataRequest;
  }
}
