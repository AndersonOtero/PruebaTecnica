import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCityComponent } from './tabs-city.component';

describe('TabsCityComponent', () => {
  let component: TabsCityComponent;
  let fixture: ComponentFixture<TabsCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
