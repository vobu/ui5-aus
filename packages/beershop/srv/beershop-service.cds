using {csw} from '../db/schema';

service BeershopService {

  entity Beers               as projection on csw.Beers;
  entity Breweries           as projection on csw.Brewery;
  entity TypeChecks          as projection on csw.TypeChecks;

  @odata.draft.enabled
  entity TypeChecksWithDraft as projection on csw.TypeChecks;
}

extend service BeershopService with {
  action reset();
  action createBeer();
}

annotate BeershopService.Beers with @UI : {LineItem : [
  {
    Label : 'beer name',
    Value : name
  },
  {
    Label : 'brewery',
    Value : brewery.name
  },
  {Value : ibu},
  {Value : abv},
], };
