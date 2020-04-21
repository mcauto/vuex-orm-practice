import { Model } from "@vuex-orm/core";

export default class Breed extends Model {
  static entity = "breeds";
  static fields() {
    return {
      weight: this.attr(),
      id: this.attr(),
      name: this.attr(),
      cfa_url: this.attr(),
      vetstreet_url: this.attr(),
      vcahospitals_url: this.attr(),
      temperament: this.attr(),
      origin: this.attr(),
      country_codes: this.attr(),
      country_code: this.attr(),
      description: this.attr(),
      life_span: this.attr(),
      indoor: this.attr(),
      lap: this.attr(),
      alt_names: this.attr(),
      adaptability: this.attr(),
      affection_level: this.attr(),
      child_friendly: this.attr(),
      dog_friendly: this.attr(),
      energy_level: this.attr(),
      grooming: this.attr(),
      health_issues: this.attr(),
      intelligence: this.attr(),
      shedding_level: this.attr(),
      social_needs: this.attr(),
      stranger_friendly: this.attr(),
      vocalisation: this.attr(),
      experimental: this.attr(),
      hairless: this.attr(),
      natural: this.attr(),
      rare: this.attr(),
      rex: this.attr(),
      suppressed_tail: this.attr(),
      short_legs: this.attr(),
      wikipedia_url: this.attr(),
      hypoallergenic: this.attr()
    };
  }
}
