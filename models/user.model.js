"use strict";
import { getFullName } from "../services/utils/common.utils";

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "User",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      fullName: {
        type: DataTypes.VIRTUAL(DataTypes.STRING, ["last_name", "first_name"]),
        get: function() {
          return getFullName({
            lastName: this.get("last_name"),
            firstName: this.get("first_name")
          });
        }
      }
    },
    {
      underscore: true,
      tableName: "users"
    }
  );
  Model.associate = function(models) {
    // associations can be defined here
  };
  return Model;
};
