import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/_services/user.service';
import { User } from '../../shared/_models/user.model';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  user: User;

  constructor(
    private us: UserService
  ) {

  }

  ngOnInit() {
    this.us.userChanged.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

}
