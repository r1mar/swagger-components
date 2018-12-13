export enum Type {
  string = 'string',
  number = 'number',
  integer = 'integer',
  boolean = 'boolean',
  array = 'array',
  object = 'object'
}

export class Property {
  public type: Type;
  public oneOf: Array<Type>;
  public nullable: boolean;
  public readOnly: boolean;
  public writeOnly: boolean;

  public format: 
  // for type=number
  'float' | 'double'
  // for type=integer
    | 'int32' | 'int64'
  // for type=string
    | 'date' | 'date-time' | 'byte' | 'binary'
  // for any/all
    | string;

  // for type=number | integer
  public minimum: number;
  public exclusivMinimum: boolean;

  public maximum: number;
  public exclusiveMaximum: boolean;
  public multipleOf: number;

  // for type=string
  public minLength: number;
  public maxLength: number;

  public pattern: RegExp;

  // for type=array
  public items;
  public minItems: number;
  public maxItems: number;
  public uniqueItems: boolean;

  // for type=object
  public additionalProperties: boolean | object;
  public minProperties: number;
  public maxProperties: number;
}