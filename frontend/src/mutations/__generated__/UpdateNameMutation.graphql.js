/**
 * @flow
 * @relayHash 391b57b4642cb7b1d6e31522fae4b924
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UpdateNameMutationVariables = {|
  id: string;
  name: string;
|};
export type UpdateNameMutationResponse = {|
  +updateName: {|
    +person: {|
      +fullName: string;
    |};
  |};
|};
*/


/*
mutation UpdateNameMutation(
  $id: ID!
  $name: String!
) {
  updateName(id: $id, name: $name) {
    person {
      fullName
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateNameMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String!"
          }
        ],
        "concreteType": "UpdateNameOutput",
        "name": "updateName",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "name": "person",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "fullName",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UpdateNameMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UpdateNameMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String!"
          }
        ],
        "concreteType": "UpdateNameOutput",
        "name": "updateName",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "name": "person",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "fullName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation UpdateNameMutation(\n  $id: ID!\n  $name: String!\n) {\n  updateName(id: $id, name: $name) {\n    person {\n      fullName\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
