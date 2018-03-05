/**
 * 国内生产总值(GDP)：societyGdpKpi
 * 采购经理人指数(PMI)：societyPmiKpi
 * 社会消费品零售总额(TRS)：societyTrsKpi
 * 居民消费价格指数(CPI)：societyCpiKpi
 * 城镇居民人均消费支出：societyPccKpi
 * 
 * 
 * 
 * 营业收入：cpySalesAmount
 * 净利润：cpySalesReturn
 * 毛利率：cpyGross
 * 净利率：cpyMargin
 * 净资产收益率：cpyEquityReturn
 * 每股收益：cpyEarningsPerShare
 * 
 * 营业收入趋势：cpySalesAmountTrend
 * 净利润趋势：cpySalesReturnTrend
 * 毛利率趋势：cpyGrossTrend
 * 净利率趋势：cpyMarginTrend
 * 净资产收益率趋势：cpyEquityReturnTrend
 * 每股收益趋势：cpyEarningsPerShareTrend
 * 
 * 
 * 
 * 存货周转天数：cpyInventoryDay
 * 存货周转率：cpyInventoryRate
 * 流动资产周转率：cpyFlowAssetRate
 * 流动资产周转天数：cpyFlowAssetDay
 * 
 * 存货周转天数趋势：cpyInventoryDayTrend
 * 存货周转率趋势：cpyInventoryRateTrend
 * 流动资产周转率趋势：cpyFlowAssetRateTrend
 * 流动资产周转天数趋势：cpyFlowAssetDayTrend
 * 
 * 
 * 
 * 主营业务收入增长率：cpyIncomeGrowth
 * 净利润增长率：cpyProfitRateGrowth
 * 总资产增长率：cpyTotalAssetGrowth
 * 净资产增长率：cpyNetAssetGrowth
 * 每股收益增长率：cpyEarningsGrowth
 * 
 * 主营业务收入增长率趋势：cpyIncomeGrowthTrend
 * 净利润增长率趋势：cpyProfitRateGrowthTrend
 * 总资产增长率趋势：cpyTotalAssetGrowthTrend
 * 净资产增长率趋势：cpyNetAssetGrowthTrend
 * 每股收益增长率趋势：cpyEarningsGrowthTrend
 * 
 * 
 */

//宏观经济入参
{
	"keyList":[
		{ "key":"societyGdpKpi"},
		{ "key":"societyPmiKpi"},
		{ "key":"societyTrsKpi"},
		{ "key":"societyCpiKpi"},
		{ "key":"societyPccKpi"}
	]
}

//竞争对手基本信息
{
	"companyCode": "1"
}


//竞争分析指数入参
{
    "id": 1,
    "keyList": [
        { "key": "cpySalesAmount"},
        {"key": "cpySalesReturn"},
        {"key": "cpyGross"},
        {"key": "cpyMargin"},
        {"key": "cpyEquityReturn"},
        {"key": "cpyEarningsPerShare"},
        {"key": "cpyIncomeGrowth"},
        {"key": "cpyProfitRateGrowth"},
        { "key": "cpyTotalAssetGrowth"},
        {"key": "cpyNetAssetGrowth"},
        {"key": "cpyEarningsGrowth"},
        {"key": "cpyInventoryDay"},
        {"key": "cpyInventoryRate"},
        {"key": "cpyFlowAssetRate"},
        {"key": "cpyFlowAssetDay"},
        {"key": "cpySalesAmountTrend"},
        {"key": "cpySalesReturnTrend"},
        {"key": "cpyGrossTrend"},
        {"key": "cpyMarginTrend"},
        {"key": "cpyEquityReturnTrend"},
        {"key": "cpyEarningsPerShareTrend"},
        {"key": "cpyIncomeGrowthTrend"},
        {"key": "cpyProfitRateGrowthTrend"},
        {"key": "cpyTotalAssetGrowthTrend"},
        {"key": "cpyNetAssetGrowthTrend"},
        {"key": "cpyEarningsGrowthTrend"},
        {"key": "cpyInventoryDayTrend"},
        {"key": "cpyInventoryRateTrend"},
        {"key": "cpyFlowAssetRateTrend"},
        {"key": "cpyFlowAssetDayTrend"}
    ]
}

//竞争分析出参
{
	"resultCode":"",
	"resultMsg":"",
	"qryReponInfo":{
		"responList":[
			{
				"key":"cpySalesAmount",
				"dataList":[
					{
						"serial":"永辉超市",
						"params"[
							{
								"key":"2015Q1",
								"value":"8000000"
							}，
							{
								"key":"2016Q2",
								"value":"23232"
							}
						]
					},
					{
						"serial":"lh超市",
						"params"[
							{
								"key":"2015Q1",
								"value":"8000000"
							}，
							{
								"key":"2016Q2",
								"value":"23232"
							}
						]
					}
				]
			},
			{
				"key":"cpySalesAmount1",
				"dataList":[
					{ 
						"key":"永辉超市",
						"value":"123456"
					},{
						"key":"永辉超市",
						"value":"123456"
					}
				]
			}
		]
	}
}







