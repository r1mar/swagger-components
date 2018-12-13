export const SCHEMA = {
  "components": {
    "schemas": {
      "address": {
        "type": "complex",
        "required": [
          "subjectType"
        ],
        "properties": {
          "subjectType": {
            "type": "integer",
            "format": "int32"
          },
          "person": {
            "$ref": "#/components/schemas/person"
          },
          "company": {
            "$ref": "#/components/schemas/company"
          }
        }
      },
      "person": {
        "type": "complex",
        "required": [
          "firstName",
          "lastName"
        ],
        "properties": {
          "firstName": {
            "type": "string",
            "maxLength": 64
          },
          "lastName": {
            "type": "string",
            "maxLength": 64
          }
        }
      },
      "company": {
        "type": "complex",
        "required": [
          "name1"
        ],
        "properties": {
          "name1": {
            "type": "string",
            "maxLength": 64
          },
          "name2": {
            "type": "string",
            "maxLength": 64
          }
        }
      }
    }
  }
};
