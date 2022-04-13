import { Component, OnInit } from '@angular/core';
import {ClientService} from "./client.service";

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  providers: [ClientService],
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  Clients:any[] = [];

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

  delete(id:String){
      this.clientService.deleteClient(id).subscribe();
    window.location.reload();
  }


  headElementsClient= ["First name", "Last name", "Email", "Phone no.", "Address", "Operation"];

}
