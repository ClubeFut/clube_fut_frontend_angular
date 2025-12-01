import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCallbackResponse } from './modal-callback-response';

describe('ModalCallbackResponse', () => {
  let component: ModalCallbackResponse;
  let fixture: ComponentFixture<ModalCallbackResponse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCallbackResponse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCallbackResponse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
