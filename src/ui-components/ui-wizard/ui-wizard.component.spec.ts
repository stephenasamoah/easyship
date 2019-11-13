import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWizardComponent } from './ui-wizard.component';

describe('UiWizardComponent', () => {
  let component: UiWizardComponent;
  let fixture: ComponentFixture<UiWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
