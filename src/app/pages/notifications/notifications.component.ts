import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/user';
import {RatingService} from '../../services/ratingservice';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  users: User[] = [];
  user: User;
  calcRatingsCount = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  };
  public selectedPhoto;
  overAllRating = 0;
  private imgURL: string | ArrayBuffer;

  constructor(private modalService: NgbModal,
              private ratingService: RatingService) {
    this.user = {
      user_name: '',
      user_mail: '',
      rating: {
        rating: 4,
        comment: ''
      }
    }
  }



  ngOnInit() {
    this.imgURL = 'https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg';
    this.ratingService.getRatings().subscribe(
      result => {
        let calcRating = 0
        for (const eachUser of result) {
            let Rating;
            const userr: User = {
              user_name: eachUser.user_name,
              user_mail: eachUser.user_mail,
              rating: Rating = {
                comment: eachUser.rating.comment,
                rating: eachUser.rating.rating
              }
            }
            calcRating = calcRating + eachUser.rating.rating;
            this.calcRatingsCount[eachUser.rating.rating]
             = this.calcRatingsCount[eachUser.rating.rating] + 1;
            console.log('Rating: ' + this.calcRatingsCount[eachUser.rating.rating]);
            this.users.push(userr);
        }
        this.overAllRating = calcRating/result.length;
        console.log(this.calcRatingsCount);
      });
  }

  initializeRating() {

  }

  showRatingModal(contentReview) {

    this.modalService.open(contentReview, {backdropClass: 'light-blue-backdrop', size: 'md'});
  }

  onFileChanged( event ) {
    console.log(event);
    this.selectedPhoto = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.selectedPhoto);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  onSubmit() {

    const uploadData = new FormData();
    if (this.selectedPhoto !== undefined) {

      uploadData.append('myPhoto', this.selectedPhoto, this.selectedPhoto.name);
      // this.user.user_image = this.imgURL;
    }
    console.log('rating: ' + JSON.stringify(this.user));
    uploadData.forEach((value, key) => {
      console.log('key %s: value %s', key, value);
    })
    this.ratingService.saveUser(this.user).subscribe(
      value => {
        console.log('Result:  ' + value);
      }
    )
  }

  modalClose() {
    this.modalService.dismissAll();
    this.imgURL = 'https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg';
    this.user = {
      user_name: '',
      user_mail: '',
      user_image: undefined,
      rating: {
        comment: '',
        rating: 0
      }
    }
  }
}
