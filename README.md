### functional-programming
functional-programming 20/21  
Student name: Nathan Neelis  

### Assignment
For the Volkskrant we are taking a look at the RDW datasets to find interesting insights for a potential article about the car in the city. The subject is "the car in the city" and the datasets contains all kind of information about parking. But we're free to explore other data as well that has to do with the car in the city.  

### Research questions
**Main research question: At which train stations are you able to park your car?**  
**Sub question 1:** Can you also recharge your parked car?   
**Sub question 2:** Are you able to park your car if you are disabled? 
**Sub question 3:** Where can you grab a OV-fiets after you parked your car? 
**(Optional) Sub question 4:** Which P+R is the best parking spot for visiting Amsterdam Central station?
  
Please read my [wiki](https://github.com/NathanNeelis/functional-programming/wiki/concept) for more information about my assumptions and datasets.

### Concept
I want to create a bar chart for the 9 Randstad cities. That shows the difference in paid and free P+R parking area's. And maybe, if the data is there a difference in rates. I would also like to pick out some cities outside the randstad and show the difference in paid and free P+R.
  
After that I would like so like to visualize a geographical map of all P+R parking places. I want to show a difference in paid and free. And I also want to highlight the best P+R spot to visit Amsterdam and maybe other cities.   

<img width="786" alt="Schermafbeelding 2020-10-30 om 10 39 43" src="https://user-images.githubusercontent.com/55492381/97689670-3cab1f00-1a9c-11eb-959a-346a6e9398c9.png">

### Datasets
[RDW dataset: GEO Parkeerkarages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34)  
_Variables: Geolocations and areaid codes_  
[RDW dataset: Geometrie gebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7)  
_Variables: areaid, GeoDataAsText_  
[RDW dataset: Specificaties parkeergebieden](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s)  
_Variables:  Areaid's, total parking spots, electric charge parking spots, disabled parking spots._  
[NS dataset: train station location](https://apiportal.ns.nl/)  
[NS dataset: P+R free parking areas](https://apiportal.ns.nl/)  
[NS dataset: P+R paid parking areas](https://apiportal.ns.nl/)  
_Variables: Location (long/lat) for train stations and P+R parking areas, rate paid P+R_  

### Getting started
#### Cloning the repo
1. Create your git repo  
    cd "/foldername"
    mkdir foldername
    git init

2. Clone this repo
    git clone https://github.com/NathanNeelis/functional-programming.git

#### Download as zip
1. Go to the url below and it will download the zip automatically
    http://github.com/NathanNeelis/functional-programming/archive/master.zip


