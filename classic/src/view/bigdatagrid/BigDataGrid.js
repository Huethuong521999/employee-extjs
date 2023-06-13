Ext.define("Admin.view.bigdata.BigDataGrid", {
  extend: "Ext.grid.Panel",
  alias: "widget.bigdatagrid",

  columnLines: true,
  headerBorders: true,
  rowLines: true,
  scrollable: true,

  id: "big-data-grid",
  title: "Big Data Grid",
  
//   plugins: {
//     gridexporter: true,
//   },

  columns: [
    {
      xtype: "rownumberer",
      dataIndex: "stt",
      text: "STT",
      width: 50,
      align: "center",
    },
    {
      dataIndex: "id",
      text: "Id",
      flex: 1.2,
    },
    {
      dataIndex: "name",
      text: "Name",
      flex: 1.5,
    },
    {
      dataIndex: "isVerified",
      text: "Verified",
      flex: 1.5,
      showHeaderCheckbox: true,
      renderer: function (value) {
        return (
          "<input type='checkbox'" + (value ? "checked='checked'" : "") + " / >"
        );
      },
    },
    {
      text: "Ratings",
      flex: 3,
      columns: [
        {
          text: "Avg",
          dataIndex: "avg",
          flex: 1.3,
        },
        {
          text: "All",
          dataIndex: "all",
          flex: 1.7,
        },
      ],
    },
    {
      dataIndex: "dateOfBirth",
      text: "Date of birth",
      flex: 1,
    },
  ],
});
