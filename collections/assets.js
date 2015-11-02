Assets = new Mongo.Collection('assets')

Assets.allow({
  insert: function(userId, userLvl, doc) {
    return !!userId;
  }
});

Brands = new SimpleSchema({
  name: {
    type: String,
    label: "Brand"
  }
});

Assetsschema = new SimpleSchema({
  item: {
    type: String,
    label: "item"
  },
  year: {
    type: Date,
    label: "year"
  },
  model: {
    type: String,
    label: "model"
  },
  serialNumber: {
    type: String,
    label: "serialNumber"
  },
  brand: {
    type: [Brands]
  },
  adquarance: {
    type: Date,
    label: "adquaranceDate"
  },
  codebar: {
    type: String,
    label: "codebar"
  },
  qrcode: {
    type: String,
    label: "QRcode"
  },
  active: {
    type: Boolean,
    label: "active",
    autoValue: function(){
      return true;
    }
  }
});
