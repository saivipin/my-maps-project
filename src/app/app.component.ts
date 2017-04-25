import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title: string = 'Google Maps';
  // lat: number = 51.678418;
  // lng: number = 7.809007;
  lat: number = 17;
  lng: number = 78;

  public Result;
  public Desc;
  public temp;
  public temp_max;
  public temp_min;
   constructor(private _appservice: AppService){
     
   }
   ngOnInit() {
   this.getweather();
   }

loadMap(){
}

 getweather() {
    debugger;
        this._appservice.getweather(this.lat,this.lng).subscribe(
            data => {
               //var temp = dataPage;
               this.Result=data;
               this.Desc=this.Result.weather[0].description;
               this.temp=this.Result.main.temp;
               this.temp_max=this.Result.main.temp_max;
               this.temp_min=this.Result.main.temp_min;
               console.log(this.Result);
            },
            error => {
                console.log(error);
               
                
            },
            () => console.log('')
        );
    }

}
