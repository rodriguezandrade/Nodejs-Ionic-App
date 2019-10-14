import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsComponent } from './add-products.component';

describe('AddProductsComponent', () => {
  let component: AddProductsComponent;
  let fixture: ComponentFixture<AddProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
