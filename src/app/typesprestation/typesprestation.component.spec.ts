import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesprestationComponent } from './typesprestation.component';

describe('TypesprestationComponent', () => {
  let component: TypesprestationComponent;
  let fixture: ComponentFixture<TypesprestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesprestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesprestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
