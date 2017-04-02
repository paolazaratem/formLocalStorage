import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todo = {
    name: '',
    age: ''
  };


  constructor(
    public navCtrl: NavController,
    public storage: Storage) {

  }

  saveForm() {
    this.storage.ready().then(() => {
      // set a key/value
      this.storage.set('name', this.todo.name);
      this.storage.set('age', this.todo.age);
     });

    console.log('this.todo', this.todo);
    this.getvalueFields();
  }

  getvalueFields(){
    this.storage.ready().then(() => {
      
      // Or to get a key/value pair
      this.storage.get('name').then((val) => {
        console.log('Your name is', val);

        })

      this.storage.get('age').then((val) => {
        console.log('Your age is', val);
        })
     });
  }

}
