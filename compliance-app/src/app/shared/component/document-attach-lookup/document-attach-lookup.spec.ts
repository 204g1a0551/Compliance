import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAttachLookup } from './document-attach-lookup';

describe('DocumentAttachLookup', () => {
  let component: DocumentAttachLookup;
  let fixture: ComponentFixture<DocumentAttachLookup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentAttachLookup],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentAttachLookup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
