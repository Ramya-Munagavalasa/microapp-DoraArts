import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import Chart from 'chart.js';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RatingService} from '../../services/ratingservice';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

export interface Course {
  id: number;
  imagePath?: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [NgbCarouselConfig],
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public isLoading: boolean = false;
  images: any;

  constructor(private modalService: NgbModal, private ratingService: RatingService,
              config: NgbCarouselConfig, private router: Router) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  courses = [];
  isModalOpen = false;
  activeCourse: Course;
  ngOnInit() {
    this.ratingService.getCourses().subscribe(
      result => {
        console.log(result);
        result.forEach(eachCourse => {
          const course: Course = {
            id: eachCourse.course_id,
            title: eachCourse.course_name,
            description: eachCourse.course_description
          }
          this.courses.push(course);
        })
      }
    )
    this.images = [
      '../../../assets/img/squirrel_background.jpg',
      '../../../assets/img/coolDrink_background.jpg',
      '../../../assets/img/snowMan_backgound.jpg',
      '../../../assets/img/bird_blur.jpg'
    ];

  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }

  openBackDropCustomClass(content, course: Course) {
    this.isLoading = true;
    this.activeCourse = course;
    this.ratingService.getRatingInfo(course.id).subscribe(
      value => {
        console.log('yahoo!!!');
        // setTimeout(() => { }, 10000);
        this.activeCourse.id = value.course_id;
        this.activeCourse.title = value.course_name;
        this.activeCourse.description = value.course_description;
        this.modalService.open(content, {backdropClass: 'light-blue-backdrop', size: 'lg'});
      },
      error => {
        console.log(error);
      },
      () => {
        this.isLoading = false;
      }
    )

  }

  navigateToReviews() {
    this.router.navigate(['/notifications']);
    // .then(r => {
    //   console.log(this.router.url);
    // });
    window.scroll(0, 0);
  }
}
