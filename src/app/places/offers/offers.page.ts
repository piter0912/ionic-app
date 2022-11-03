import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];

  constructor(private placesServices: PlacesService) {}

  ngOnInit() {
    this.offers = this.placesServices.places;
  }

  onEdit(offerId: string) {
    console.log('Edit', offerId);
  }

  onEditWithItem(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('Edit', offerId);
  }
}
