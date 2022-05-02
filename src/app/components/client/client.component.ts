import { Component, OnInit } from '@angular/core';
import {ClientService} from "./client.service";
import * as _ from "lodash";

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  providers: [ClientService],
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  Clients:any[] = [];

  existsClient = '';
  choseClient: any;
  isExistsClient = false;


  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.getClient()
        .subscribe(client => {
          this.Clients = client;
        })
  }

  searchClient(){
    const id = this.existsClient;

    console.log("id:",id);

    this.choseClient = _.filter(this.Clients, function (o) {
      return (_.includes(id,o._id));
    });
    console.log("choseClient:", this.choseClient);

    if(this.existsClient !== 'Choose...'){
      this.isExistsClient = true;
    }else{
      this.isExistsClient = false;
    }

    if(this.choseClient.length > 1){
      this.choseClient.shift();
    }
  }

  delete(id:String){
      this.clientService.deleteClient(id).subscribe();
    window.location.reload();
  }


  headElementsClient= ["First name", "Last name", "Email", "Phone no.", "Address"];
  headElementsClients= ["First name", "Last name", "Email", "Phone no.", "Address", "Operation"];

}
