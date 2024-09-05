import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdecaPageComponent } from './odeca-page.component';

describe('OdecaPageComponent', () => {
  let component: OdecaPageComponent;
  let fixture: ComponentFixture<OdecaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OdecaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdecaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
