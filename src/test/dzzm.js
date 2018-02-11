/**
 * 当天当前累计销售额：salesAmountDayShop
 * 当天当前累计毛利：salesReturnDayShop
 * 当天当前累计店内客流：custFlowDayShop
 * 当天当前平均客单价：payAverageDayShop
 * 
 * 当天销售额趋势：salesAmountTrendShop
 * 当天毛利趋势：salesReturnTrendShop
 * 当天店内客流趋势：custFlowTrendShop
 * 当天客单价趋势：payAverageTrendShop
 * 
 * 时间段内门店累计销售额：salesAmountAccum
 * 时间段内门店累计毛利：salesReturnAccum
 * 时间段内门店日均毛利率：grossMarginAccum
 * 时间段内门店平均笔单价：payAverageAccum
 * 时间段内门店累计店内客流：custFlowAccum
 * 时间段内门店日均支付转化率：payConverAccum
 * 
 * 时间段内门店销售额趋势：salesAmountAccumTrend
 * 时间段内门店毛利趋势：salesReturnAccumTrend
 * 时间段内门店毛利率趋势：grossMarginAccumTrend
 * 时间段内门店笔单价趋势：payAverageAccumTrend
 * 时间段内门店店内客流趋势：custFlowAccumTrend
 * 时间段内门店支付转化率趋势：payConverAccumTrend
 * 
 * 门店大类销售金额构成：salesAmountStatsCate
 * 门店大类毛利构成：salesReturnStatsCate
 * 
 * 
 */

//查询部类的大类销售排行
{
	"qryInfo":{
		"beginDate":"2017-02-11 11:11:11",
		"endDate":"2017-02-21 11:11:11",
		"shopId":"1000",
		"cateId":"1",
		"qryList":[
			{
				"qryType":"sales"
				"sortType":"desc",
				"sortField":"salesAmount"
			},
			{
				"qryType":"salesReturn"
				"sortType":"desc",
				"sortField":"salesReturn"
			}
		]
	}
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
	"qryInfo":{
		"beginDate":"2017-02-11 11:11:11",
		"endDate":"2017-02-21 11:11:11",
		"type":"1000",
		"id":"1",
		"keyList":[
			{"key":"cateSalesStatsShop"}
		]
	}
}

//查询查询销售构成出参
{
	"responList":[
		{
			"key":"salesAmountTrendShop",
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


//查询门店核心看板指数
{
	"qryInfo":{
		"beginDate":"2017-02-11 11:11:11",
		"endDate":"2017-02-21 11:11:11",
		"type":"1000",
		"id":"1",
		"keyList":[
			{"key":"salesAmountAccum","compareList":["industry","year"]},
			{"key":"salesAmountAccumTrend"}
		]
	}
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
					"value":"222"
				},
				{
					"key":"year",
					"value":"333"
				}
			]
		},
		{
			"key":"salesAmountTrendShop",
			"dataList":[
				{
					"serial":"门店销售额",
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


//查询实时概况指数入参
{
	"qryInfo":{
		"beginDate":"2017-02-11 11:11:11",
		"endDate":"2017-02-11 11:11:11",
		"type":"1000",
		"id":"1",
		"keyList":[
			{"key":"salesAmountDayShop"},
			{"key":"salesReturnDayShop"},
			{"key":"custFlowDayShop"},
			{"key":"payAverageDayShop"},
			{"key":"salesAmountTrendShop"},
			{"key":"salesReturnTrendShop"},
			{"key":"custFlowTrendShop"},
			{"key":"payAverageTrendShop"},
		]
	}
}

//查询实时概况指数出参
{
	"responList":[
		{
			"key":"salesAmountDayShop",
			"value":"2134"
		},
		{
			"key":"salesAmountTrendShop",
			"dataList":[
				{
					"serial":"今日实时",
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
					"serial":"昨日实时",
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







