import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RoutinePage } from './routine.page';

describe('RoutinePage', () => {
  let component: RoutinePage;
  let fixture: ComponentFixture<RoutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinePage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
