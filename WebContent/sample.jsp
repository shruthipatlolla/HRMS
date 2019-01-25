<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css">
<script type="text/javascript" src="extjs/ext-all-dev.js"></script>
</head>
<body>
<script type="text/javascript">

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.grid.PagingScroller'
]);


Ext.onReady(function() {
    Ext.QuickTips.init();
    
    // setup the state provider, all state information will be saved to a cookie
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));


    // sample static data for the store
    var myData = [
        ['3m Co',                               71.72, 0.02,  0.03,  '9/1 12:00am'],
        ['Alcoa Inc',                           29.01, 0.42,  1.47,  '9/1 12:00am'],
        ['Altria Group Inc',                    83.81, 0.28,  0.34,  '9/1 12:00am'],
        ['American Express Company',            52.55, 0.01,  0.02,  '9/1 12:00am'],
        ['American International Group, Inc.',  64.13, 0.31,  0.49,  '9/1 12:00am'],
        ['AT&T Inc.',                           31.61, -0.48, -1.54, '9/1 12:00am'],
        ['Boeing Co.',                          75.43, 0.53,  0.71,  '9/1 12:00am'],
        ['Caterpillar Inc.',                    67.27, 0.92,  1.39,  '9/1 12:00am'],
        ['Citigroup, Inc.',                     49.37, 0.02,  0.04,  '9/1 12:00am'],
        ['E.I. du Pont de Nemours and Company', 40.48, 0.51,  1.28,  '9/1 12:00am'],
        ['Exxon Mobil Corp',                    68.1,  -0.43, -0.64, '9/1 12:00am'],
        ['General Electric Company',            34.14, -0.08, -0.23, '9/1 12:00am'],
        ['General Motors Corporation',          30.27, 1.09,  3.74,  '9/1 12:00am'],
        ['Hewlett-Packard Co.',                 36.53, -0.03, -0.08, '9/1 12:00am'],
        ['Honeywell Intl Inc',                  38.77, 0.05,  0.13,  '9/1 12:00am'],
        ['Intel Corporation',                   19.88, 0.31,  1.58,  '9/1 12:00am'],
        ['International Business Machines',     81.41, 0.44,  0.54,  '9/1 12:00am'],
        ['Johnson & Johnson',                   64.72, 0.06,  0.09,  '9/1 12:00am'],
        ['JP Morgan & Chase & Co',              45.73, 0.07,  0.15,  '9/1 12:00am'],
        ['McDonald\'s Corporation',             36.76, 0.86,  2.40,  '9/1 12:00am'],
        ['Merck & Co., Inc.',                   40.96, 0.41,  1.01,  '9/1 12:00am'],
        ['Microsoft Corporation',               25.84, 0.14,  0.54,  '9/1 12:00am'],
        ['Pfizer Inc',                          27.96, 0.4,   1.45,  '9/1 12:00am'],
        ['The Coca-Cola Company',               45.07, 0.26,  0.58,  '9/1 12:00am'],
        ['The Home Depot, Inc.',                34.64, 0.35,  1.02,  '9/1 12:00am'],
        ['The Procter & Gamble Company',        61.91, 0.01,  0.02,  '9/1 12:00am'],
        ['United Technologies Corporation',     63.26, 0.55,  0.88,  '9/1 12:00am'],
        ['Verizon Communications',              35.57, 0.39,  1.11,  '9/1 12:00am'],
        ['Wal-Mart Stores, Inc.',               45.45, 0.73,  1.63,  '9/1 12:00am']
    ];


    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    function change(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    }


    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    function pctChange(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    }


    // create the data store
    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'company'},
           {name: 'price',      type: 'float'},
           {name: 'change',     type: 'float'},
           {name: 'pctChange',  type: 'float'},
           {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ],
        data: myData
    });
    
    var searching = {
        ftype: 'searching',
        mode: 'local'
    };


    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        features: [searching],
        stateful: true,
        stateId: 'stateGrid',
        columns: [
            {
                text     : 'Company',
                flex     : 1,
                sortable : false,
                dataIndex: 'company'
            },
            {
                text     : 'Price',
                width    : 75,
                sortable : true,
                renderer : 'usMoney',
                dataIndex: 'price'
            },
            {
                text     : 'Change',
                width    : 75,
                sortable : true,
                renderer : change,
                dataIndex: 'change'
            },
            {
                text     : '% Change',
                width    : 75,
                sortable : true,
                renderer : pctChange,
                dataIndex: 'pctChange'
            },
            {
                text     : 'Last Updated',
                width    : 85,
                sortable : true,
                renderer : Ext.util.Format.dateRenderer('m/d/Y'),
                dataIndex: 'lastChange'
            }
        ],
        height: 350,
        width: 600,
        title: 'Array Grid',
        renderTo: 'basic',
        viewConfig: {
            stripeRows: true
        }
    });
    
    
    //****************************************************************************
    // Infinate Grid example
    //****************************************************************************
    Ext.define('ForumThread', {
        extend: 'Ext.data.Model',
        fields: [
            'title', 'forumtitle', 'forumid', 'author',
            {name: 'replycount', type: 'int'},
            {name: 'lastpost', mapping: 'lastpost', type: 'date', dateFormat: 'timestamp'},
            'lastposter', 'excerpt', 'threadid'
        ],
        idProperty: 'threadid'
    });


    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        id: 'store',
        pageSize: 200,
        model: 'ForumThread',
        remoteSort: true,
        // allow the grid to interact with the paging scroller by buffering
        buffered: true,
        proxy: {
            // load using script tags for cross domain, if the data in on the same domain as
            // this page, an HttpProxy would be better
            type: 'jsonp',
            url: 'http://www.sencha.com/forum/remote_topics/index.php',
            extraParams: {
                total: 50000
            },
            reader: {
                root: 'topics',
                totalProperty: 'totalCount'
            },
            // sends single sort as multi parameter
            simpleSortMode: true
        },
        sorters: [{
            property: 'lastpost',
            direction: 'DESC'
        }]
    });


    function renderTopic(value, p, record) {
        return Ext.String.format(
            '<a href="http://sencha.com/forum/showthread.php?t={2}" target="_blank">{0}</a>',
            value,
            record.data.forumtitle,
            record.getId(),
            record.data.forumid
        );
    }


    var searching = {
        ftype: 'searching',
        mode: 'remote',
        position: 'top'
    };


    var grid = Ext.create('Ext.grid.Panel', {
        width: 700,
        height: 500,
        title: 'ExtJS.com - Browse Forums',
        store: store,
        features: [searching],
        verticalScrollerType: 'paginggridscroller',
        loadMask: true,
        disableSelection: true,
        invalidateScrollerOnRefresh: false,
        viewConfig: {
            trackOver: false
        },
        // grid columns
        columns:[{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },{
            // id assigned so we can apply custom css (e.g. .x-grid-cell-topic b { color:#333 })
            // TODO: This poses an issue in subclasses of Grid now because Headers are now Components
            // therefore the id will be registered in the ComponentManager and conflict. Need a way to
            // add additional CSS classes to the rendered cells.
            id: 'topic',
            text: "Topic",
            dataIndex: 'title',
            flex: 1,
            renderer: renderTopic,
            sortable: false
        },{
            text: "Author",
            dataIndex: 'author',
            width: 100,
            hidden: true,
            sortable: true
        },{
            text: "Replies",
            dataIndex: 'replycount',
            align: 'center',
            width: 70,
            sortable: false
        },{
            id: 'last',
            text: "Last Post",
            dataIndex: 'lastpost',
            width: 130,
            renderer: Ext.util.Format.dateRenderer('n/j/Y g:i A'),
            sortable: true
        }],
        renderTo: Ext.getBody()
    });


    // trigger the data store load
    store.guaranteeRange(0, 199);    
    
});
</script>
<div id="basic"></div>
<br />
<div id="topic-grid"></div>

</body>
</html>