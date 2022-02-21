import { Component, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-richtexteditor';
  public mode: string = 'Markdown';
  @ViewChild('exampleRTE')
  public componentObject! : RichTextEditorComponent;
  private buttonElement! : HTMLElement | null;
  private htmlContent! : string;

  getFormattedContent() {
    this.buttonElement = document.getElementById('button');
    this.htmlContent = this.componentObject.getHtml();
  }

  public customToolbar: Object ={
    items: [ 'Bold', 'Italic','Undo', 'Redo', 'CreateTable', 'Image', 'CreateLink']
  };
  
}
