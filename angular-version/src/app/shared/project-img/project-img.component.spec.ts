import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImgComponent } from './project-img.component';

describe('ProjectImgComponent', () => {
  let component: ProjectImgComponent;
  let fixture: ComponentFixture<ProjectImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
