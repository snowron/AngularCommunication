import { Component, OnInit} from '@angular/core';
import { DataService } from "../../data.service";
@Component({
  selector: 'app-sb1',
  templateUrl: './sb1.component.html',
  styleUrls: ['./sb1.component.css']
})
export class Sb1Component implements OnInit {


constructor(private data: DataService) { }

ngOnInit() {
newMessage()
}

newMessage() {
  this.data.addMessage({"isim" : "murat", "fiyat":"turan","id":"snowronark"})

}

}
