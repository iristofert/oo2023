let vastus : string[]=[];
function ebavajalikTeisendus (meeter:number) : string[] {
  //furlong kuulub absurdsesse FFF süsteemi, 1f=201.186m
  let furlong :string = meeter/201.186 + " furlongi";
   vastus.push(furlong);
   //potrzebie on ameerika ajakirjast Mad, kus potrzebie tähistaba ajakirja väljaande nr 26 paksust, 1p=2.2633484517438173216473mm
   let potrzebie :string = meeter*1000/2.2633484517438173216473 + " potrzebiet";
   vastus.push(potrzebie);
   //altuve on pesapallimängija Altuve pikkus, üks lühimaid mängijaid, 1a=1.65m
   let altuve :string = meeter/1.65 + " altuvet";
   vastus.push(altuve);
   //sheppey on kõige lühim kaugus, kus lambad jäävad veel visuaalselt kenasti pildile, 1s=1.4km
   let sheppey :string = meeter/1400 + " sheppeyt";
   vastus.push(sheppey);
   //smoot on harvardi silla mõõteühik O.R Smooti järgi, 1s=1.7m
   let smoot :string = meeter/1.7 + " smooti";
   vastus.push(smoot);
   //wiffle on wiffle mängu palli diameeter, kasutatakse bioloogide poolt, 1w=89mm
   let wiffle :string = meeter*1000/89 + " wifflet";
   vastus.push(wiffle);
   return vastus;
}
console.log(ebavajalikTeisendus(1))
