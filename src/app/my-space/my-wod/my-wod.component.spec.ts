import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWodComponent } from './my-wod.component';

describe('MyWodComponent', () => {
  let component: MyWodComponent;
  let fixture: ComponentFixture<MyWodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
