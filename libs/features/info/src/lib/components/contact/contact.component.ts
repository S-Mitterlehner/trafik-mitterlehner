import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'info-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent  {
  name = '';
  contactInfo = '';
  message = '';

  constructor(private http: HttpClient) { }

  sendMail(): void {
    const body = {
      name: this.name,
      contactInfo: this.contactInfo,
      message: this.message
    }

    // @ts-ignore
    const url = new URL(window.location);

    //TODO
    this.http.post(`${url.origin}/api/send-mail.php`, body)
      .subscribe(
        d => console.log('success', d),
        d => console.log('error', d)
      );
  }
}