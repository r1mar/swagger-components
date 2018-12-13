import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

import { Property } from './property';

import { SCHEMA } from './address.schema';

Injectable({
  providedIn: "root"
})
export class SchemaService {
  /**
   * Return a Property object from Schema
   * 
   * @param {string} path - Path to Property in schema like '#/components/schemas/person/firstName'
   */
  public getPropertySchema(path: string) : Observable<Property> {
    if(!path) {
      throw new Error(`Parameter "path" not given`);
    }
    const pathComponents = path.split('/'),
          result: Property = new Property();
    let cursor = SCHEMA;

    pathComponents.forEach(component => {
      if(component === "#") {
        return;
      }
      if(!cursor[component]) {
        throw new Error(`component with path "${path}" not found`);
      }
      cursor = cursor[component];
    });

    const attributes = Object.keys(cursor);

    attributes.forEach(attribute => {
      result[attribute] = cursor[attribute];
    });

    return of(result) ;
  }
}