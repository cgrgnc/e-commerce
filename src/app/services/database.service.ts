import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
}
)
export class DatabaseService{

  // itemsColletionForBicycle = this.afs.collection('bicycles', ref => ref.orderBy('title','asc'));
  itemsColletionForBicycle = this.afs.collection('bicycles');
  itemsColletionForParts = this.afs.collection('parts');
  itemsColletionForAccessories = this.afs.collection('accessories');
  itemsColletionForClothing = this.afs.collection('clothing');

  
  bicycles:any= [];
  accessoriesData:any = [];
  partsData:any = [];
  clothingData:any = [];

  bikeImgsPage1: any = [];
  bikeImgsPage2:any = [];
  bikeImgs:any = [];
  parts:any = [];
  accessories:any = [];
  clothing:any = [];

  

  constructor(public afs: AngularFirestore, private http: HttpClient) { }

  // client_id = this.hidden.unsplash_api;
  client_id = environment.unsplash_api;

  getBicyclesPage1(){
    return this.http.get(`https://api.unsplash.com/collections/iuAONw1hf3k/photos/?query=''&per_page=20&client_id=${this.client_id}&page=1`).pipe(map((e:any) => e.map((e:any) => e.urls.small)));
  }
  getBicyclesPage2(){
    return this.http.get(`https://api.unsplash.com/collections/iuAONw1hf3k/photos/?query=''&per_page=20&client_id=${this.client_id}&page=2`).pipe(map((e:any) => e.map((e:any) => e.urls.small)));
  }

  getParts(){
    return this.http.get(`https://api.unsplash.com/collections/MkltW8eSTkQ/photos/?query=''&per_page=20&client_id=${this.client_id}`).pipe(map((e:any) => e.map((e:any) => e.urls.small)));
  }

  getAccessories(){
    return this.http.get(`https://api.unsplash.com/collections/-_X6rVMs3UA/photos/?query=''&per_page=20&client_id=${this.client_id}`).pipe(map((e:any) => e.map((e:any) => e.urls.small)));
  }

  getClothing(){
    return this.http.get(`https://api.unsplash.com/collections/VzcUWJHRjgA/photos/?query=''&per_page=20&client_id=${this.client_id}`).pipe(map((e:any) => e.map((e:any) => e.urls.small)));
  }

  // select Brand

  makeBrand(length:any) {
    var result           = '';
    var characters       = ['Hannondale','Kube','Katch', 'Marinu', 'Zona', 'Harley', 'Biancho'];
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters[(Math.floor(Math.random() * charactersLength))];
   }
   return result;
}
  // select Model Letter
  makeid(length:any) {
    var result           = '';
    var characters       = 'ABCDEFG';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
  }
  return result;
  }

  // select random integer
  getRandomInt(min:any, max:any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
  
  
  // select description
  makeDesc(length:any) {
    var result           = '';
    var characters       = ["The Lifestyle comes with a simple Shimano 7-speed drivetrain. The gearing is perfect for moderate hills and long distances on flat surfaces. Alloy linear-pull brakes offer excellent stopping power on the pavement. With the double-wall alloy rims paired with 27.5 x 1.95 inches tires, you'll have a sturdy set up with some extra cushion underneath you.",
                            'This model comes with the new Shimano Deore M6100 12-Speed drivetrain with a single chainring setup which can be usually seen on significantly more expensive bikes. There are a few benefits of this system - it makes shifting much simpler because handlebars occupy only one shifter and the overall weight is significantly lower compared with double or triple chainrings setup. The crankset comes with 32 teeth narrow-wide chainring for firm chain retention. The new 12-speed cassette uses Beam Spider construction to keep the weight down while increasing gearing range. Using new Micro Spline freehub body and HyperGlide+ tooth profile, the 10-51T cassette delivers advanced shifting performance. Lastly, the ride is significantly quieter, with a clutch equipped derailleur which perfectly secures the chain and eliminates any bouncing.',
                            'The bike comes equipped with a 120mm travel SR Suntour XCR 32 air suspension fork with thru-axle to give the bike greater control while descending rough terrain at high speeds. With the increased travel in the fork, the head tube and stem length have been shortened to preserve the neutral riding position that Polygons are known for. There has been no compromise on the popular handling characteristics of the bike, yet the additional travel ensures the bike is more forgiving in more technical environments. The Shimano M201 hydraulic disc brakes offer excellent modulation, fierce stopping power and yet are simple to service.',
                            'All too often, corners are cut to meet price-points in the entry-level road bike market, but the Allez redefines what it means to be "entry level." Focusing on weight, refinement, and reliability like nothing else in its class, the Allez is the first to make these technologies accessible to everyone. Whether you\'re just getting into road cycling, commuting, or looking for a new bike, the Allez is just as performance-packed as it is versatile.', 
                            'Entry-level road bikes often times feature either alloy or cheap carbon fiber forks that greatly detract from the overall ride quality. But with a full FACT carbon fiber fork, the Allez is better handling, smoother riding, and lower in weight, floating over rough chip-seal and carving through corners like a slalom skier.', 
                            'This Allez also features integrated rack and fender mounts, allowing you to get weight of your backpack off you and onto a lightweight rack. This not only makes for a good road bike, but it also enables you to transform it into a fast commuter.', 
                            'Boasting contemporary race geometry, English-threaded bottom bracket shell, shortened chainstay, replaceable derailleur hanger, and substantial mud clearance, the Nature Cross now features a Columbus Futura carbon fork with adjustable rake, tapered head and steerer tubes, and clearance for 700c x 42mm tires.'
                           ];
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters[(Math.floor(Math.random() * 
 charactersLength))];
   }
   return result;
}



  // creating Bicycles Products
  createBicycles(){
    this.getBicyclesPage1().subscribe((e)=>{
      this.bikeImgsPage1 = e;
    });
    this.getBicyclesPage2().subscribe((e)=>{
      this.bikeImgsPage2 = e;
    });
    setTimeout(() => {
      // this.bikeImgsPage1.concat(this.bikeImgsPage2);
      this.bikeImgs = [...this.bikeImgsPage1, ...this.bikeImgsPage2];
      
      for (let i = 0; i < 40; i++){
        var bikeObject:any = {
          img: this.bikeImgs[i]
        }
        this.bicycles.push(bikeObject);
        if( i % 3 == 0){
          this.bicycles[i].categorie = "Road Bike"; 
        }
        if( i % 3 == 1){
          this.bicycles[i].categorie = "City Bike";
        }
        if( i % 3 == 2){
          this.bicycles[i].categorie = "Mountain Bike";
        }
        this.bicycles[i].id = uuid();
        this.bicycles[i].title = this.makeBrand(1)+' '+this.makeid(1)+this.getRandomInt(1000,9999);
        this.bicycles[i].price = this.getRandomInt(500,900);
        this.bicycles[i].description = this.makeDesc(1);
        this.itemsColletionForBicycle.add(this.bicycles[i]);
      }
      
    }, 3000);
  }

  // creating parts product
  createParts(){
    this.getParts().subscribe((e)=>{
      this.parts = e;
    });

    setTimeout(() => {
      for (let i = 0; i < 20; i++){
        var partsObject:any = {
          img: this.parts[i]
        }
        this.partsData.push(partsObject);
        this.partsData[i].id = uuid();
        this.partsData[i].title = 'Model '+this.makeid(1)+this.getRandomInt(1000,9999);
        this.partsData[i].price = this.getRandomInt(30,300);
        this.partsData[i].description = this.makeDesc(1);
        this.itemsColletionForParts.add(this.partsData[i]);
      }
      
    }, 3000);

    }

    // creating accessories product
  createAccessories(){
    this.getAccessories().subscribe((e)=>{
      this.accessories = e;
    });

    setTimeout(() => {
      for (let i = 0; i < 20; i++){
        var partsObject:any = {
          img: this.accessories[i]
        }
        this.accessoriesData.push(partsObject);
        this.accessoriesData[i].id = uuid();
        this.accessoriesData[i].title = 'Model '+this.makeid(1)+this.getRandomInt(1000,9999);
        this.accessoriesData[i].price = this.getRandomInt(30,300);
        this.accessoriesData[i].description = this.makeDesc(1);
        this.itemsColletionForAccessories.add(this.accessoriesData[i]);
      }
      
    }, 3000);

    }

    // creating clothing product

    createClothing(){
      this.getClothing().subscribe((e)=>{
        this.clothing = e;
      });
  
      setTimeout(() => {
        for (let i = 0; i < 20; i++){
          var partsObject:any = {
            img: this.clothing[i]
          }
          this.clothingData.push(partsObject);
          this.clothingData[i].id = uuid();
          this.clothingData[i].title = 'Model '+this.makeid(1)+this.getRandomInt(1000,9999);
          this.clothingData[i].price = this.getRandomInt(30,300);
          this.clothingData[i].description = this.makeDesc(1);
          this.itemsColletionForClothing.add(this.clothingData[i]);
        }
        
      }, 3000);
  
      }

  
  // post the database
  postData(){
    this.createBicycles();
    this.createParts();
    this.createAccessories();
    this.createClothing();


  }




}
