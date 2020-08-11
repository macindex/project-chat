import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    items: Observable<any[]>;
    name: any;
    msgVal: string = '';
//
constructor(public afd: AngularFireDatabase){
  this.items = afd.database.list('/messages', {
    query: {
      limitToLast: 25
    }
  });
    this.af.auth.subscribe(auth => {
      if(auth){
        this.name = auth;
      }
    });
  }

	}
}