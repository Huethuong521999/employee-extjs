Ext.define("Admin.store.KetThucNhanVien", {
    extend: "Ext.data.Store",
  
    alias: "store.ktnhanVienStore",
    storeId: "KTNhanVienStore",
    model: "Admin.model.KetThucNhanVien",
  
    pageSize: 20,
    autoLoad: true,
  
    loadStore: function () {
      let me = this;
      (function updateData(){
        me.setProxy({
          type: "ajax",
          url: "https://em-v2.oceantech.com.vn/em/employee/search",
          extraParams: {
            // pageIndex: 1,
            pageSize: 20,
            keyword: '',
            listStatus: 7
          },
          pageParam: 'pageIndex',
          startParam: false,
          limitParam: false,
          paramsAsJson: true,
          noCache: false,
          headers: {
            Authorization: "Bearer" + Ext.util.Cookies.get("token"),
          },
    
          reader: {
            type: "json",
            rootProperty: "data",
            totalProperty: "totalElements"
          },
          listeners: {
            exception: function (proxy, response, operation) {
              CheckToken.checkToken(response, updateData);
            },
          },
        });
    
        me.load();
      })()
    },
  });
  