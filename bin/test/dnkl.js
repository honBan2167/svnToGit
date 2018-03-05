/**
 * 新客人数：customerNewCnt
 * 老客人数：customerOldCnt
 * 平均驻店时长：customerAvgStaytime
 * 支付会员数：customerMbrCnt
 * 连接WI-FI人数：customerWifiCnt
 * 
 * 新客人数趋势：customerNewCntTrend
 * 老客人数趋势：customerOldCntTrend
 * 平均驻店时长趋势：customerAvgStaytimeTrend
 * 支付会员数趋势：customerMbrCntTrend
 * 连接WI-FI人数趋势：customerWifiCntTrend
 * 
 * 新客驻店时长趋势：customerNewAvgStayTimeTrend
 * 老客驻店时长趋势：customerOldAvgStayTimeTrend
 * 
 * 周入店频次趋势：customerInFreqWeekTrend
 * 月入店频次趋势：customerInFreqMonthTrend
 * 
 * 来店间隔趋势：customerInShopIntervalTrend
 * 
 */


//统一接口
{
		"beginDate":"2018-03-01 12:11:11",
		"endDate":"2018-03-01 12:11:11",
		"shopId":"1",
		"keyList":[
			{"key":"shopSalesAmountAccumTrend"},
			{"key":"shopSalesReturnAccumTrend"},
			{"key":"shopGrossMarginAccumTrend"},
			{"key":"shopPayAverageAccumTrend"},
			{"key":"shopCustFlowAccumTrend"},
			{"key":"shopPayConverAccumTrend"}
		]
}

//热力图入参
{
	"beginDate":"",
	"endDate":"",
	"shopId":"",
	"shopFloor":"",
	"isRealTime":true
}

//热力图出参
{
	"dataList"[
		{
			"x":"",
			"y":"",
			"value":""
		},
		{
			"x":"",
			"y":"",
			"value":""
		}
	]
}
