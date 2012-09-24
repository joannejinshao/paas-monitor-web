Ext.define('PaaSMonitor.view.ModelDef.MetricTemplateWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.templatewindow',
    
    requires: [
               'PaaSMonitor.store.MetricTemplateStore'
    ],
    
    id: 'MetricTemplateWindow',
   
    layout: 'fit',
    height: 250,
    width: 400,
    title: '显示该资源的所有可用监测参数',
    
    closeAction: 'hide',
    
    //除窗口外背景全部变为暗色，然后其他区域不能操作
    modal: true,

    initComponent: function() {
        var me = this;
        
        //在此处添加需要在window中使用的组件，如grid  
        
        /*
        Ext.applyIf(me, {
        	layout: 'fit',
        	items: {
        		xytpe: 'grid',
        		store: Ext.data.StoreManager.lookup('MetricTemplateStore'),
				columns:[{
					header: '名称',  dataIndex: 'name' 
					},{
					header: '间隔/ms', dataIndex: 'defaultInterval', 
					format: '0,000',
					flex: 1,
					editor: {
						xtype: 'numberfield',
						allowblank: false
						}
					},{
					header: '单位', dataIndex: 'units' 
				}],
				selType: 'checkboxmodel',
	        	multiSelect: true,
				height: 200,
				width: 400,
				plugins:[
							Ext.create('Ext.grid.plugin.CellEditing', {
								clicksToEdit: 1
							})
							],
				dockedItems: [{
					xtype: 'pagingtoolbar',
					store: Ext.data.StoreManager.lookup('MetricTemplateStore'),
					dock: 'bottom',
					displayInfo: true
        		}]
        	},
        	buttons: [{
        		text: '确定'
        	},{
        		text: '取消',
        		handler: function() {
        			me.hide();
        		}
        	}]
        });
        */
        
        
        var grid = Ext.create('Ext.grid.Panel', {
    		store: Ext.data.StoreManager.lookup('MetricTemplateStore'),
			columns:[{
				header: '名称',  dataIndex: 'name' 
				},{
				header: '间隔/ms', dataIndex: 'defaultInterval', 
				format: '0,000',
				flex: 1,
				editor: {
					xtype: 'numberfield',
					allowblank: false
					}
				},{
				header: '单位', dataIndex: 'units' 
			}],
			selType: 'checkboxmodel',
        	multiSelect: true,
			height: 200,
			width: 400,
			plugins:[
				Ext.create('Ext.grid.plugin.CellEditing', {
					clicksToEdit: 1
				})
			],
			dockedItems: [{
				xtype: 'pagingtoolbar',
				store: Ext.data.StoreManager.lookup('MetricTemplateStore'),
				dock: 'bottom',
				displayInfo: true
    		}],
    		//renderTo: me
        });
        
        me.items = [grid];
        
        var ok = Ext.create('Ext.Button', {
        	text: '生成Metric',
        	handler: function() {
        		var sm = grid.getSelectionModel();
        		var selectedItems = sm.getSelectoin();
        		
        	}
        });
        
        var cancel = Ext.create('Ext.Button', {
        	text: '取消', 
        	handler: function() {
        		me.hide();
        	}
        });
        
        me.buttons = [ok, cancel];
        

        me.callParent(arguments);
    }

});