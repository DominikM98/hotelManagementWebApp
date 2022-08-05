import { Component, OnInit } from '@angular/core';
import {MobileSectionService} from "../mobile-section.service";
import * as _ from "lodash";

@Component({
  selector: 'mobile-clients',
  templateUrl: './mobile-clients.component.html',
  providers: [MobileSectionService],
  styleUrls: ['./mobile-clients.component.scss']
})
export class MobileClientsComponent implements OnInit {

  MobileClients: any[] = [];

  existsMobileClient = '';
  choseMobileClient: any;
  isExistsMobileClient = false;

  constructor(private mobileSectionService: MobileSectionService) { }

  ngOnInit(): void {
    this.getMobileUsers()

  }

  getMobileUsers(){
    this.mobileSectionService.getMobileUsers()
        .subscribe(u => {
          this.MobileClients = u;
        })
  }

  searchMobileClient(){
    const id = this.existsMobileClient;

    console.log("id:",id);

    this.choseMobileClient = _.filter(this.MobileClients, function (o) {
      return (_.includes(id,o._id));
    });
    console.log("choseClient:", this.choseMobileClient);

    if(this.existsMobileClient !== 'Choose...'){
      this.isExistsMobileClient = true;
    }else{
      this.isExistsMobileClient = false;
    }

    if(this.choseMobileClient.length > 1){
      this.choseMobileClient.shift();
    }
  }

  delete(id:String){
    this.mobileSectionService.deleteMobileUsers(id).subscribe();
    window.location.reload();
  }

  headElementsMobileClient= ["Phone number", "Password","Security code", "Operation"];

}
