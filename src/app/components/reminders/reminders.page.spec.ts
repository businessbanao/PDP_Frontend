import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RemindersPage } from './reminders.page';

describe('RemindersPage', () => {
  let component: RemindersPage;
  let fixture: ComponentFixture<RemindersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindersPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(RemindersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
