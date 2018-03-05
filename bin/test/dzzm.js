/**
 * 当天当前累计销售额：shopSalesAmountDay
 * 当天当前累计毛利：shopSalesReturnDay
 * 当天当前累计店内客流：shopCustFlowDay
 * 当天当前平均客单价：shopPayAverageDay
 * 
 * 当天销售额趋势：shopSalesAmountTrend
 * 当天毛利趋势：shopSalesReturnTrend
 * 当天店内客流趋势：shopCustFlowTrend
 * 当天客单价趋势：shopPayAverageTrend
 * 
 * 时间段内门店累计销售额：shopSalesAmountAccum
 * 时间段内门店累计毛利：shopSalesReturnAccum
 * 时间段内门店日均毛利率：shopGrossMarginAccum
 * 时间段内门店平均笔单价：shopPayAverageAccum
 * 时间段内门店累计店内客流：shopCustFlowAccum
 * 时间段内门店日均支付转化率：shopPayConverAccum
 * 
 * 时间段内门店销售额趋势：shopSalesAmountAccumTrend
 * 时间段内门店毛利趋势：shopSalesReturnAccumTrend
 * 时间段内门店毛利率趋势：shopGrossMarginAccumTrend
 * 时间段内门店笔单价趋势：shopPayAverageAccumTrend
 * 时间段内门店店内客流趋势：shopCustFlowAccumTrend
 * 时间段内门店支付转化率趋势：shopPayConverAccumTrend
 * 
 * 时间段内业态销售额趋势：industrySalesAmountAccumTrend
 * 时间段内业态毛利趋势：industrySalesReturnAccumTrend
 * 时间段内业态毛利率趋势：industryGrossMarginAccumTrend
 * 时间段内业态笔单价趋势：industryPayAverageAccumTrend
 * 
 * 时间段内门店去年同比销售额趋势：shopLastYearSalesAmountTrend
 * 时间段内门店去年同比毛利趋势：shopLastYearSalesReturnTrend
 * 时间段内门店去年同比毛利率趋势：shopLastYearGrossMarginTrend
 * 时间段内门店去年同比笔单价趋势：shopLastYearPayAverageTrend
 * 时间段内门店去年同比店内客流趋势：shopLastYearCustFlowTrend
 * 时间段内门店去年同比支付转化率趋势：shopLastYearPayConverTrend
 * 
 * 门店大类销售金额构成：salesAmountStatsCate
 * 门店大类毛利构成：salesReturnStatsCate
 * 
 */


//查询门店核心看板指数
{
		"beginDate":"2018-02-25 12:11:11",
		"endDate":"2018-02-26 12:11:11",
		"type":"1000",
		"id":"1",
		"keyList":[
			{"key":"salesAmountAccum","compareList":["industry","year"]},
			{"key":"salesReturnAccum","compareList":["industry","year"]},
			{"key":"grossMarginAccum","compareList":["industry","year"]},
			{"key":"payAverageAccum","compareList":["industry","year"]},
			{"key":"custFlowAccum","compareList":["year"]},
			{"key":"payConverAccum","compareList":["year"]},
			{"key":"shopSalesAmountAccumTrend"},
			{"key":"shopSalesReturnAccumTrend"},
			{"key":"shopGrossMarginAccumTrend"},
			{"key":"shopPayAverageAccumTrend"},
			{"key":"shopCustFlowAccumTrend"},
			{"key":"shopPayConverAccumTrend"}
		]
}

//查询门店核心看板指数出参
{
	"responList":[
		{
			"key":"salesAmountAccumShop",
			"value":"222",
			"compareList":[
				{
					"key":"industry",
					"value":"22"
				},
				{
					"key":"year",
					"value":"33"
				}
			]
		},
		{
			"key":"salesAmountTrendShop",
			"dataList":[
				{
					"serial":"销售额",
					"params":[
						{
							"key":"02-12",
							"value":"222"
						},
						{
							"key":"02-13",
							"value":"222"
						}
					]
				},
				{
					"serial":"去年同期销售额",
					"params":[
						{
							"key":"02-12",
							"value":"222"
						},
						{
							"key":"02-13",
							"value":"222"
						}
					]
				},
				{
					"serial":"业态销售额",
					"params":[
						{
							"key":"02-12",
							"value":"222"
						},
						{
							"key":"02-13",
							"value":"222"
						}
					]
				}
			]
		}
	]
}

//查询部类的大类销售排行
{
	"beginDate":"2018-02-26 12:11:11",
	"endDate":"2018-02-26 12:11:11",
	"shopId":"1",
	"cateId":"1",
	"qryList":[
		{
			"qryType":"sales",
			"sortType":"desc",
			"sortField":"salesAmount"
		},
		{
			"qryType":"salesReturn",
			"sortType":"desc",
			"sortField":"salesReturn"
		}
	]
}

//查询部类的大类销售排行
{
    "code":"0000",
    "message":"",
    "data":{
        "responList":[
            {
                "qryType":"sales",
                "dataList":[
                    {
                        "sort":"1",
                    	"name":"伊利牛奶",
                        "sales":"333",
                        "salesVoume":"100",
                    },
                    {
                    	"sort":"2",
                    	"name":"哇哈哈",
                        "sales":"444",
                        "salesVoume":"200"
                    }
                ]
            },
            {
                "qryType":"salesReturn",
                "dataList":[
                    {
                        "sort":"1",
                    	"name":"伊利牛奶",
                        "sales":"333",
                        "salesVoume":"100",
                    },
                    {
                    	"sort":"2",
                    	"name":"哇哈哈",
                        "sales":"444",
                        "salesVoume":"200"
                    }
                ]
            }
        ]
    }
}



//查询查询销售构成
{
	"beginDate":"2018-02-26 12:11:11",
	"endDate":"2018-02-26 12:11:11",
	"type":"1000",
	"id":"1",
	"keyList":[
		{"key":"salesAmountStatsCate"},
		{"key":"salesReturnStatsCate"}
	]
}

//查询查询销售构成出参
{
	"responList":[
		{
			"key":"salesAmountStatsCate",
			"dataList":[
				{
					"serial":"水果",
					"params":[
						{
							"key":"02-12",
							"value":"222"
						},
						{
							"key":"02-13",
							"value":"222"
						}
					]
				},
				{
					"serial":"奶制品",
					"params":[
						{
							"key":"02-12",
							"value":"222"
						},
						{
							"key":"02-13",
							"value":"222"
						}
					]
				}
			]
		}
	]
}

//查询实时概况指数入参
{
	"beginDate":"2018-02-26 12:11:11",
	"endDate":"2018-02-26 12:11:11",
	"type":"1000",
	"id":"1",
	"keyList":[
		{"key":"ShopSalesAmountDay"},
		{"key":"ShopSalesReturnDay"},
		{"key":"ShopCustFlowDay"},
		{"key":"ShopPayAverageDay"},
		{"key":"ShopSalesAmountTrend"},
		{"key":"ShopSalesReturnTrend"},
		{"key":"ShopCustFlowTrend"},
		{"key":"ShopPayAverageTrend"}
	]
}

//查询实时概况指数出参
{
	"responList":[
		{
			"key":"salesAmountDayShop",
			"value":"2134"
		},
		{
			"key":"salesReturnDayShop",
			"value":"2134"
		},
		{
			"key":"custFlowDayShop",
			"value":"2134"
		},
		{
			"key":"payAverageDayShop",
			"value":"2134"
		},
		{
			"key":"salesAmountTrendShop",
			"dataList":[
				{
					"serial":"20180226",
					"params"[
						{
							"key":"09",
							"value":"8000"
						}，
						{
							"key":"10",
							"value":"9000"
						}
					]
				},
				{
					"serial":"20180225",
					"params"[
						{
							"key":"08",
							"value":"8000"
						}，
						{
							"key":"09",
							"value":"9000"
						}
					]
				}
			]
		}
	]
}







