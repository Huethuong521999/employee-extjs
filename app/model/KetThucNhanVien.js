Ext.define("Admin.model.KetThucNhanVien", {
    extend: "Admin.model.Base",
    fields: [
        {
            type: "string",
            name: "code",
        },
        {
            type: "string",
            name: "name",
        },
        {
            type: "string",
            name: "gender",
        },
        {
            type: "number",
            name: "dateOfBirth",
        },
        {
            type: "string",
            name: "citizenIdentificationNumber",
        },
        {
            type: "string",
            name: "email",
        },
        {
            type: "string",
            name: "phone",
        },
        {
            type: "string",
            name: "address",
        },
        {
            type: "string",
            name: "submitProfileStatus",
        },
    ],
  });
  