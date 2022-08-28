import { Component, OnInit } from '@angular/core';
import {MobileSectionService} from "../mobile-section.service";
import * as _ from "lodash";

@Component({
  selector: 'mobile-ratings',
  templateUrl: './mobile-ratings.component.html',
  providers: [MobileSectionService],
  styleUrls: ['./mobile-ratings.component.scss']
})
export class MobileRatingsComponent implements OnInit {

  Ratings: any[] = [];
  sortedData: any[] = [];

  existsMobileRatings = '';
  choseMobileRating: any;

  isExistsMobileRating = false;

  constructor(private mobileSectionService: MobileSectionService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(){
    this.mobileSectionService.getRatings()
        .subscribe(rating => {
          this.Ratings = rating;
        })
  }

  searchMobileRating(){
    const id = this.existsMobileRatings;

    console.log("id:",id);

    this.choseMobileRating = _.filter(this.Ratings, function (o) {
      return (_.includes(id,o._id));
    });
    console.log("choseClient:", this.choseMobileRating);

    if(this.existsMobileRatings !== 'Choose...'){
      this.isExistsMobileRating = true;
    }else{
      this.isExistsMobileRating = false;
    }

    if(this.choseMobileRating.length > 1){
      this.choseMobileRating.shift();
    }
  }

  headElementsMobileRatings=["Number booking", "About hotel", "Good things", "Bad things", "Recommend", "More data"];
  headElementsMobileRatings2=["Reception service", "Restaurant service", "Room service", "Interior service", "Equipment service"];

}
