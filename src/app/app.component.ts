import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI-component';

  // width = '1024';
  // height = '1000';
  // widthRatio = '3';
  // heightRatio = '6';
  // formats = ['JPG', 'PNG'];
  // fileSize = '2';

  size = {
    width: '300',
    height: '300'
  }

  value = {
    width: '1024',
    height: '1000',
    widthRatio: '3',
    heightRatio: '6',
    format: ['JPG', 'PNG', 'JPEG'],
    fileSize: '2'
  }

  url: string = '';
  message: string = '確定刪除嗎？？？';

  constructor() {
    window['app'] = this;
  }

  uploadedImg(event) {
    console.log('uploadImg...');
    console.log(event);

    //要傳給component的網址
    const url = window.URL.createObjectURL(event);

    setTimeout(() => {
      this.url = url;
    }, 0);

  }

}
