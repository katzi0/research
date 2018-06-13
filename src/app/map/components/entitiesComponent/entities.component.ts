import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { AcNotification, ActionType } from 'angular-cesium';
import { entitiesSelector } from '../../store/map.selectors';
import { Store } from '@ngrx/store';
import 'rxjs-compat/add/operator/filter';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/withLatestFrom';
import { IMapState } from '../../interfaces/map.interfaces';


@Component({
  selector: 'research-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnDestroy {
  testDataSubscription: Subscription;
  entities$ = this.store.select(entitiesSelector);

  mockDataExample$: Subject<AcNotification> = new Subject<AcNotification>();


  constructor(private store: Store<IMapState>) {
    setTimeout(() => {
      this.testDataSubscription = this.entities$.subscribe(x => {
        x.forEach(y => {
          if (!Array.isArray(y)){
            this.mockDataExample$.next(y);
          } else{
            console.log(y[0]);
            this.mockDataExample$.next(y[0]);
          }
        });
      });
    }, 0);
  }

  ngOnDestroy() {
    this.testDataSubscription.unsubscribe();
  }
}
