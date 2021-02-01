import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FinancePage } from './finance.page';

describe('FinancePage', () => {
  let component: FinancePage;
  let fixture: ComponentFixture<FinancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancePage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
