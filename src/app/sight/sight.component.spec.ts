import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SightComponent } from './sight.component';

describe('SightComponent', () => {
  let component: SightComponent;
  let fixture: ComponentFixture<SightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
