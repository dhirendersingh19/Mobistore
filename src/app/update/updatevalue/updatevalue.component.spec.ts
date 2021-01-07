import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevalueComponent } from './updatevalue.component';

describe('UpdatevalueComponent', () => {
  let component: UpdatevalueComponent;
  let fixture: ComponentFixture<UpdatevalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
