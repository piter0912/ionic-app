/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Manhatan Mansion',
      guestNumber: 2,
      userId: 'abc',
    },
  ];

  get bookings() {
    return [...this._bookings];
  }
}
