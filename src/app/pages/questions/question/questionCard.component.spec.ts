import {QuestionCardComponent} from "./questionCard.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {async} from "rxjs";

describe('QuestionCardComponent',()=>{
  let component: QuestionCardComponent
  let fixture: ComponentFixture<QuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuestionCardComponent
      ]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(QuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a question', () => {
    expect(component.question).toBeTruthy();
  });

  it('should have a question title', () => {
    expect(component.question.title).toBeTruthy();
  });

  it('should have a question body', () => {
    expect(component.question.body).toBeTruthy();
  });

  it('should have a question author', () => {
    expect(component.question.author).toBeTruthy();
  });
});
