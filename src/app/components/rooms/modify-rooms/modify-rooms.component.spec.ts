import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRoomsComponent } from './modify-rooms.component';

describe('ModifyRoomsComponent', () => {
  let component: ModifyRoomsComponent;
  let fixture: ComponentFixture<ModifyRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
