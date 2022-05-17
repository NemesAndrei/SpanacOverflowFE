import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {QuestionsListComponent} from "./pages/questions/questionsList.component";
import {QuestionDetailsComponent} from "./pages/questions/questionDetails.component";
import {TagListComponent} from "./pages/tags/tagList.component";
import {QuestionFilterTagComponent} from "./pages/questions/filtered/tag/questionFilterTag.component";
import {QuestionFilterTitleComponent} from "./pages/questions/filtered/title/questionFilterTitle.component";
import {AddQuestionComponent} from "./pages/questions/addQuestion.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {IsLoggedInGuard} from "./shared/guards/isLoggedIn.guard";
import {IsUserGuard} from "./shared/guards/isUser.guard";
import {RegisterComponent} from "./pages/register/register.component";
import {myQuestionsComponent} from "./pages/profile/myQuestions.component";
import {myAnswersComponent} from "./pages/profile/myAnswers.component";
import {DashboardComponent} from "./admin/pages/dashboard.component";
import {IsAdminGuard} from "./shared/guards/isAdmin.guard";
import {QuestionsAdminComponent} from "./admin/pages/questions/questionsAdmin.component";
import {AnswersAdminComponent} from "./admin/pages/answers/answersAdmin.component";
import {UsersAdminComponent} from "./admin/pages/users/usersAdmin.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: DashboardComponent, canActivate: [IsLoggedInGuard,IsAdminGuard]},
  {path:'admin/questions', component:QuestionsAdminComponent, canActivate: [IsLoggedInGuard,IsAdminGuard]},
  {path:'admin/answers', component:AnswersAdminComponent, canActivate: [IsLoggedInGuard,IsAdminGuard]},
  {path:'admin/users', component:UsersAdminComponent, canActivate: [IsLoggedInGuard,IsAdminGuard]},
  {path: 'home', canActivate:[IsLoggedInGuard,IsUserGuard], component: HomepageComponent},
  {path: 'profile',canActivate:[IsLoggedInGuard,IsUserGuard], component: ProfileComponent},
  {path: 'profile/questions',canActivate:[IsLoggedInGuard,IsUserGuard], component: myQuestionsComponent},
  {path: 'profile/answers',canActivate:[IsLoggedInGuard,IsUserGuard], component: myAnswersComponent},
  { path: 'questions',canActivate:[IsLoggedInGuard,IsUserGuard], component:QuestionsListComponent},
  {path: 'questions/add',canActivate:[IsLoggedInGuard,IsUserGuard], component: AddQuestionComponent},
  {path: 'questions/tag/:tag',canActivate:[IsLoggedInGuard,IsUserGuard], component:QuestionFilterTagComponent},
  {path: 'questions/title/:title',canActivate:[IsLoggedInGuard,IsUserGuard], component:QuestionFilterTitleComponent},
  { path: 'questions/:id',canActivate:[IsLoggedInGuard,IsUserGuard], component: QuestionDetailsComponent},
  {path: 'tags',canActivate:[IsLoggedInGuard,IsUserGuard], component: TagListComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
