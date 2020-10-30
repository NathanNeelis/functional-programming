### functional-programming
functional-programming 20/21  
Student name: Nathan Neelis  

### Concept
I want to create a bar chart for the 9 Randstad cities. That shows the difference in paid and free P+R parking area's. And maybe, if the data is there a difference in rates. I would also like to pick out some cities outside the randstad and show the difference in paid and free P+R.
  
After that I would like so like to visualize a geographical map of all P+R parking places. I want to show a difference in paid and free. And I also want to highlight the best P+R spot to visit Amsterdam and maybe other cities.   

### Research questions
**Main research question: At which train stations are you able to park your car?**  
**Sub question 1:** Can you also recharge your parked car?   
**Sub question 2:** Are you able to park your car if you are disabled? 
**Sub question 3:** Where can you grab a OV-fiets after you parked your car? 
**(Optional) Sub question 4:** Which P+R is the best parking spot for visiting Amsterdam Central station?
  
Please read my [wiki](https://github.com/NathanNeelis/functional-programming/wiki/concept) for more information about my assumptions and datasets.

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

