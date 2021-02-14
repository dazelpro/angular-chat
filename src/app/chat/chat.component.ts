import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    chat;
    idUser;
    myData0: any[] = [];

    constructor(
        private firestore: AngularFirestore,
    ) { 
        this.idUser = localStorage.getItem('id');
    }

    ngOnInit(): void {
        this.tampilData();
        console.log(this.idUser)
    }

    tampilData() {
        let query1 = this.firestore.collection('chat', ref => ref
            .orderBy('chatSendAt', 'asc')
        );
        let dataNew0 = query1.valueChanges({ idField: 'id' });
        dataNew0.subscribe(ss => {
            this.myData0 = ss;
            console.log(this.myData0)
        });
    }

    send() {
        if (this.chat !== undefined && this.chat !== '') {
            let data = {
                chatUser: this.idUser,
                chatMessage: this.chat,
                chatSendAt: formatDate(new Date(), 'yyyyMMddhhmmss', 'en')
            }
            this.firestore.collection('chat')
            .add(data)
            .then(res => {
                this.reset();
            })
            .catch(e => {
                console.log(e);
            })
        }
    }

    reset() {
        this.chat = '';
    }

}
