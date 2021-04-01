import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery-9';

@Component({
  selector: 'app-property-about',
  templateUrl: './property-about.component.html',
  styleUrls: ['./property-about.component.css']
})
export class PropertyAboutComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {
  }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 3,
        imagePercent: 65,
        thumbnailsPercent: 35,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageInfinityMove: true,
        previewCloseOnEsc: true,
        previewInfinityMove: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '350px',
        thumbnailsColumns: 2,
        imagePercent: 70,
        thumbnailsPercent: 30,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '/assets/img/meeting-office.jpg',
        medium: '/assets/img/meeting-office.jpg',
        big: '/assets/img/meeting-office.jpg'
      },
      {
        small: '/assets/img/private-office.jpg',
        medium: '/assets/img/private-office.jpg',
        big: '/assets/img/private-office.jpg'
      },
      {
        small: '/assets/img/building1.jpg',
        medium: '/assets/img/building1.jpg',
        big: '/assets/img/building1.jpg'
      }
    ];

  }

}
