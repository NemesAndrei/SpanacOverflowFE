import {RegisterComponent} from "./register.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a username', () => {
    expect(component.username).toBeTruthy();
  });

  it('should have a password', () => {
    expect(component.password).toBeTruthy();
  });

  it('should have a name', () => {
    expect(component.name).toBeTruthy();
  });
});

