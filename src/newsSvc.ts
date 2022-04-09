import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable()
export class ChrisSvc
{
   
    constructor( private apiCaller : HttpClient,
        
        ){}
 

    callApi(){
        return this.apiCaller.get('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true/')
    }
    callApi2(){
        return this.apiCaller.get('https://newsx.p.rapidapi.com/search?rapidapi-key=57272cbd6bmsh96b344cab1519b8p1cedffjsncecc0f70250d  ')
    }
}