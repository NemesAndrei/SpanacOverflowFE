import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TagsService {
  constructor(private http:HttpClient) {

  }

  async getTags(): Promise<any> {
    let tags = await this.http.get("http://localhost:8081/tags/getAll").toPromise();
    console.log(tags);
    return tags;
  }

}

