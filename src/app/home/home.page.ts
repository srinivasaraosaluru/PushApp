import { Component } from '@angular/core';

import {  EmarsysSDKCustom } from  'capacitor-emarsys-sdk-plugin'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // public contacts: Contacts1[] = [];
  public value!: string;
  constructor() {}

  async getUUID(){
    this.value =  (await EmarsysSDKCustom.getUUID('test')).value;
    console.log("My UUID", this.value);

    EmarsysSDKCustom.addListener('pushMessageEvent', (message: any) => {
      // do something
      alert("asdsad");
      console.log("sdsadsad");
    });
  }

  async addListener(){

    EmarsysSDKCustom.setContact({
      "contactFieldId":380356580,
      "contactFieldValue": "Testing Srinivas From Ionic App v1"
    });

    console.log("Set It to System");
    EmarsysSDKCustom.addListener('pushMessageEvent', (message: any) => {
      // do something
      alert("asdsad");
      console.log("Testing.....");
    });


  }

}
