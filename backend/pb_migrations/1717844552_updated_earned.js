/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f6fvqymqd2tt0f3")

  // remove
  collection.schema.removeField("azjssxbl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a4demtpr",
    "name": "number",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f6fvqymqd2tt0f3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "azjssxbl",
    "name": "number",
    "type": "number",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("a4demtpr")

  return dao.saveCollection(collection)
})
