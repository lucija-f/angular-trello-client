import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddNewComponent } from './modal-add-new.component';

describe('ModalAddNewComponent', () => {
  let component: ModalAddNewComponent;
  let fixture: ComponentFixture<ModalAddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
