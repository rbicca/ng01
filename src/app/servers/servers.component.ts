import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No Servers";
  serverName = "nenhum";
  serverCreated = false;

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = "Server " +  this.serverName  + " was created";
    this.serverCreated = true;
  }

  onUpdateServerName(e:Event){
    this.serverName =(<HTMLInputElement>e.target).value;
    //console.log(e);
  }

}
