import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificBlog } from './specific-blog';

describe('SpecificBlog', () => {
  let component: SpecificBlog;
  let fixture: ComponentFixture<SpecificBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
