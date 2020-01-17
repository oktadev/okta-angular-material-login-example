import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatLabel,
  MatOptionModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [
        FormsModule,
        MatCardModule,
        MatIconModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
