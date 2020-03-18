import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.firestore.collection('hives', ref => ref.where('userId', '==', user.uid)).valueChanges().subscribe(console.log)
    });
  }

  public add(): void {
    this.afAuth.authState.subscribe(user => {
      this.firestore.collection('hives').doc(this.firestore.createId()).set({
        userId: user.uid
      }).then(console.log);
    });
  }
}
