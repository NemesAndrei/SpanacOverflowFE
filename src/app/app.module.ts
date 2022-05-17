import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {NavbarComponent} from "./navigation/navbar.component";
import {QuestionsListComponent} from "./pages/questions/questionsList.component";
import {QuestionCardComponent} from "./pages/questions/question/questionCard.component";
import {QuestionsService} from "./shared/questions.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {QuestionDetailsComponent} from "./pages/questions/questionDetails.component";
import {AnswerCardComponent} from "./pages/questions/answer/answerCard.component";
import {TagCardComponent} from "./pages/tags/tag/tagCard.component";
import {TagsService} from "./shared/tags.service";
import {TagListComponent} from "./pages/tags/tagList.component";
import {QuestionFilterTagComponent} from "./pages/questions/filtered/tag/questionFilterTag.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QuestionFilterTitleComponent} from "./pages/questions/filtered/title/questionFilterTitle.component";
import {AddQuestionComponent} from "./pages/questions/addQuestion.component";
import {AnswerService} from "./shared/answer.service";
import {ProfileComponent} from "./pages/profile/profile.component";
import {UserService} from "./shared/user.service";
import {AuthenticationService} from "./shared/authentication.service";
import {IsLoggedInGuard} from "./shared/guards/isLoggedIn.guard";
import {IsUserGuard} from "./shared/guards/isUser.guard";
import {IsAdminGuard} from "./shared/guards/isAdmin.guard";
import {RegisterComponent} from "./pages/register/register.component";
import {myQuestionsComponent} from "./pages/profile/myQuestions.component";
import {myAnswersComponent} from "./pages/profile/myAnswers.component";
import {DashboardComponent} from "./admin/pages/dashboard.component";
import {AdminNavComponent} from "./admin/navigation/adminnav.component";
import {QuestionsAdminComponent} from "./admin/pages/questions/questionsAdmin.component";
import {AnswersAdminComponent} from "./admin/pages/answers/answersAdmin.component";
import {UsersAdminComponent} from "./admin/pages/users/usersAdmin.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NavbarComponent,
    QuestionsListComponent,
    QuestionCardComponent,
    QuestionDetailsComponent,
    AnswerCardComponent,
    TagCardComponent,
    TagListComponent,
    QuestionFilterTagComponent,
    QuestionFilterTitleComponent,
    AddQuestionComponent,
    ProfileComponent,
    RegisterComponent,
    myQuestionsComponent,
    myAnswersComponent,
    DashboardComponent,
    AdminNavComponent,
    QuestionsAdminComponent,
    AnswersAdminComponent,
    UsersAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    QuestionsService,
    TagsService,
    AnswerService,
    UserService,
    AuthenticationService,
    IsLoggedInGuard,
    IsUserGuard,
    IsAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
