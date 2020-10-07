import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() theme = 'light';
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  changeTheme(data) {
    this.onChange.emit(data.value)
  }

}
