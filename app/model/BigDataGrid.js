Ext.define("Admin.model.BigDataGrid", {
  extend: "Admin.model.Base",

  fields: [
    {
      type: "string",
      name: "id",
    },
    {
      type: "string",
      name: "name",
    },
    {
      type: "boolean",
      name: "isVerified",
    },
    {
      type: "number",
      name: "avg",
    },
    {
      type: "string",
      name: "all",
    },
    {
        type: 'date',
        name: 'dateOfBirth'
    },
  ],
});
