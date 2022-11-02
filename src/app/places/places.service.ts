/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cooper_Hewitt_%2848059131921%29.jpg/250px-Cooper_Hewitt_%2848059131921%29.jpg',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris',
      'https://tophotel.news/wp-content/uploads/2018/06/25hours-francess-1024x512.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://tangiyoga.files.wordpress.com/2015/04/castle-in-fog.jpg',
      99.99
    ),
  ];

  constructor() {}

  get places() {
    return [...this._places];
  }

  getPlace(id: string): Place {
    return { ...this._places.find((p) => p.id === id) };
  }
}
