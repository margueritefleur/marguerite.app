/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f6fvqymqd2tt0f3",
    "created": "2024-06-08 11:01:47.887Z",
    "updated": "2024-06-08 11:01:47.887Z",
    "name": "earned",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "azjssxbl",
        "name": "number",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f6fvqymqd2tt0f3");

  return dao.deleteCollection(collection);
})
