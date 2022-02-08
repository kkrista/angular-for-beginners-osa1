import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data= {
    title: '<h1>Angular-course</h1><script>alert("Attack")</script>'
  };

  onLogoClicked() {
    alert('Hello World');
  }

  onKeyUp(newTitle:string) {

    this.data.title = newTitle;

  }

}
