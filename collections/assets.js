Assets = new Mongo.Collection('assets')

Assets.allow({
  insert: function(userId, doc) {
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

status = new SimpleSchema({
  name: {
    type: String,
    label: "status"
   }
});

usersworker = new SimpleSchema({
  name : {
    type: String,
    label: "name"
  },
  proffesion: {
    type: String,
    label: "proffesion"
  },
  datestart: {
    type: Date,
    label: "daystart",
    autoform: {
      type: "hidden"
    }
  }
});

movements = new SimpleSchema({
  item: {
    type: [Assetsschema]
  },
  userinsert: {
    type: String,
    label: "userinsert",
    autoValue: function(){
      return userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  userworker: {
    type: [usersworker]
  },
  timestamp: {
    type: Date,
    label: "timestamp",
    autoValue: function(){
      return Date.now();
    },
    autoform: {
      type: "hidden"
    }
  },
  timeretrive: {
    type: Date,
    label: "timeretrive"
  },
  timereturn: {
    type: Date,
    label: "timereturn"
  },
  location: {
    type: String,
    label: "location"
  },
  status: {
    type: [status]
  },
  reason: {
    type: String,
    label: "reason"
  },
  details: {
    type: String,
    label: "details"
  }

});
