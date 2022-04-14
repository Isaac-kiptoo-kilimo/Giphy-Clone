import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistGifsComponent } from './artist-gifs.component';

describe('ArtistGifsComponent', () => {
  let component: ArtistGifsComponent;
  let fixture: ComponentFixture<ArtistGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
