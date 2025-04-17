import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppComponent } from './new-app.component';

describe('NewAppComponent', () => {
  let component: NewAppComponent;
  let fixture: ComponentFixture<NewAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAppComponent]
    });
    fixture = TestBed.createComponent(NewAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
