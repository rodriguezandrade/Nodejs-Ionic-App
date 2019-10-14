import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductsComponent } from './edit-products.component';

describe('EditProductsComponent', () => {
  let component: EditProductsComponent;
  let fixture: ComponentFixture<EditProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
