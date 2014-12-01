(function(app) {

	app.rolePairs = [
		// Sanguobansha, id: "1xxx"
		{id: "1001", name: "曹操"},
		{id: "1002", name: "曹丕"},
		{id: "1003", name: "曹植"},
		{id: "1004", name: "郭嘉"},
		{id: "1005", name: "荀彧"},
		{id: "1006", name: "荀攸"},
		{id: "1007", name: "贾诩"},
		{id: "1008", name: "司马懿"},
		{id: "1009", name: "钟会"},
		{id: "1010", name: "夏侯惇"},
		{id: "1011", name: "曹仁"},
		{id: "1012", name: "夏侯渊"},
		{id: "1013", name: "张郃"},
		{id: "1014", name: "张辽"},
		{id: "1015", name: "徐晃"},
		{id: "1016", name: "邓艾"},
		{id: "1017", name: "典韦"},
		{id: "1018", name: "许褚"},
		{id: "1019", name: "蔡琰"},
		{id: "1020", name: "甄宓"},
		{id: "1101", name: "刘备"},
		{id: "1102", name: "刘禅"},
		{id: "1103", name: "徐庶"},
		{id: "1104", name: "卧龙"},
		{id: "1105", name: "姜维"},
		{id: "1106", name: "马良"},
		{id: "1107", name: "诸葛亮"},
		{id: "1108", name: "庞统"},
		{id: "1109", name: "法正"},
		{id: "1110", name: "关羽"},
		{id: "1111", name: "黄忠"},
		{id: "1112", name: "张飞"},
		{id: "1113", name: "马超"},
		{id: "1114", name: "赵云"},
		{id: "1115", name: "魏延"},
		{id: "1116", name: "王平"},
		{id: "1117", name: "糜夫人"},
		{id: "1118", name: "黄月英"},
		{id: "1201", name: "孙坚"},
		{id: "1202", name: "孙策"},
		{id: "1203", name: "孙权"},
		{id: "1204", name: "周瑜"},
		{id: "1205", name: "鲁肃"},
		{id: "1206", name: "吕蒙"},
		{id: "1207", name: "陆逊"},
		{id: "1208", name: "陆抗"},
		{id: "1209", name: "太史慈"},
		{id: "1210", name: "丁奉"},
		{id: "1211", name: "蒋钦"},
		{id: "1212", name: "甘宁"},
		{id: "1213", name: "凌统"},
		{id: "1214", name: "黄盖"},
		{id: "1215", name: "周泰"},
		{id: "1216", name: "徐盛"},
		{id: "1217", name: "小乔"},
		{id: "1218", name: "孙尚香"},
		{id: "1301", name: "吕布"},
		{id: "1302", name: "孟获"},
		{id: "1303", name: "貂蝉"},
		{id: "1304", name: "祝融"},
		{id: "1305", name: "张角"},
		{id: "1306", name: "左慈"},
		{id: "1307", name: "华佗"},
		{id: "1308", name: "葛玄"},
		{id: "1309", name: "王允"},
		{id: "1310", name: "于吉"},
		{id: "1311", name: "陈琳"},
		{id: "1312", name: "陈寿"},
		{id: "1313", name: "水镜先生"},
		{id: "1314", name: "管辂"},
		{id: "1315", name: "孔融"},
		{id: "1316", name: "祢衡"},
		{id: "1317", name: "董卓"},
		{id: "1318", name: "庞德"},
		{id: "1319", name: "袁绍"},
		{id: "1320", name: "袁术"},
		{id: "1321", name: "陈宫"},
		{id: "1322", name: "陈登"},
		{id: "1323", name: "卢植"},
		{id: "1324", name: "蔡邕"},
		{id: "1325", name: "百姓"},
		{id: "1326", name: "流寇"},
		{id: "1327", name: "山贼"},
		{id: "1328", name: "海盗"},
		{id: "1329", name: "黄巾贼"},
		{id: "1330", name: "汉少帝"},
		{id: "1331", name: "汉献帝"},

		// Sanguobansha 1v1, id: "2xxx"
		{id: "2001", name: "曹操"},
		{id: "2002", name: "曹丕"},
		{id: "2003", name: "曹植"},
		{id: "2004", name: "郭嘉"},
		{id: "2005", name: "荀彧"},
		{id: "2006", name: "荀攸"},
		{id: "2007", name: "贾诩"},
		{id: "2008", name: "司马懿"},
		{id: "2009", name: "钟会"},
		{id: "2010", name: "夏侯惇"},
		{id: "2011", name: "曹仁"},
		{id: "2012", name: "张辽"},
		{id: "2013", name: "徐晃"},
		{id: "2014", name: "邓艾"},
		{id: "2015", name: "典韦"},
		{id: "2016", name: "许褚"},
		{id: "2017", name: "蔡琰"},
		{id: "2018", name: "甄姬"},
		{id: "2019", name: "刘备"},
		{id: "2020", name: "刘禅"},
		{id: "2021", name: "徐庶"},
		{id: "2022", name: "卧龙"},
		{id: "2023", name: "姜维"},
		{id: "2024", name: "庞统"},
		{id: "2025", name: "法正"},
		{id: "2026", name: "关羽"},
		{id: "2027", name: "黄忠 "},
		{id: "2028", name: "张飞"},
		{id: "2029", name: "马超"},
		{id: "2030", name: "赵云"},
		{id: "2031", name: "魏延"},
		{id: "2032", name: "糜夫人"},
		{id: "2033", name: "黄月英"},
		{id: "2034", name: "孙坚"},
		{id: "2035", name: "孙策"},
		{id: "2036", name: "孙权 "},
		{id: "2037", name: "周瑜"},
		{id: "2038", name: "鲁肃 "},
		{id: "2039", name: "吕蒙"},
		{id: "2040", name: "陆逊"},
		{id: "2041", name: "陆抗"},
		{id: "2042", name: "太史慈"},
		{id: "2043", name: "丁奉"},
		{id: "2044", name: "甘宁"},
		{id: "2045", name: "凌统"},
		{id: "2046", name: "黄盖"},
		{id: "2047", name: "周泰 "},
		{id: "2048", name: "小乔"},
		{id: "2049", name: "孙尚香"},
		{id: "2050", name: "吕布"},
		{id: "2051", name: "孟获"},
		{id: "2052", name: "张角"},
		{id: "2053", name: "左慈"},
		{id: "2054", name: "华佗"},
		{id: "2055", name: "葛玄"},
		{id: "2056", name: "貂蝉"},
		{id: "2057", name: "祝融"},
		{id: "2058", name: "陈琳"},
		{id: "2059", name: "陈寿"},
		{id: "2060", name: "水镜先生"},
		{id: "2061", name: "管辂"},
		{id: "2062", name: "孔融"},
		{id: "2063", name: "祢衡"},
		{id: "2064", name: "董卓"},
		{id: "2065", name: "庞德"},
		{id: "2066", name: "王允"},
		{id: "2067", name: "于吉"},
		{id: "2101", name: "刘表"},
		{id: "2102", name: "刘琦"},
		{id: "2103", name: "刘琮"},
		{id: "2104", name: "袁绍"},
		{id: "2105", name: "袁术"},
		{id: "2106", name: "杨修"},
		{id: "2107", name: "陈群"},
		{id: "2108", name: "少侠"},
		{id: "2109", name: "马良"},
		{id: "2110", name: "诸葛亮"},
		{id: "2111", name: "于禁"},
		{id: "2112", name: "乐进"},
		{id: "2113", name: "王平"},
		{id: "2114", name: "廖化"},
		{id: "2115", name: "徐盛"},
		{id: "2116", name: "董袭"},
		{id: "2117", name: "曹洪"},
		{id: "2118", name: "曹彰"},
		{id: "2119", name: "百姓"},
		{id: "2120", name: "汉献帝"},
		{id: "2121", name: "公孙瓒"},
		{id: "2122", name: "马腾"},
		{id: "2201", name: "刘焉"},
		{id: "2202", name: "刘璋"},
		{id: "2203", name: "陈宫"},
		{id: "2204", name: "张松"},
		{id: "2205", name: "文聘"},
		{id: "2206", name: "张任"},
		{id: "2207", name: "星彩"},
		{id: "2208", name: "马云禄"},
		{id: "2209", name: "许邵"},
		{id: "2210", name: "马均"},
		{id: "2211", name: "毋丘俭"},
		{id: "2212", name: "诸葛诞"},
		{id: "2213", name: "蔡邕"},
		{id: "2214", name: "蒋干"},
		{id: "2215", name: "颜良"},
		{id: "2216", name: "文丑"},
		{id: "2217", name: "华雄"},
		{id: "2218", name: "高顺"},
		{id: "2219", name: "华歆"},
		{id: "2220", name: "王朗"},
		{id: "2301", name: "陶谦"},
		{id: "2302", name: "张鲁"},
		{id: "2303", name: "程昱"},
		{id: "2304", name: "刘晔"},
		{id: "2305", name: "满宠"},
		{id: "2306", name: "张昭"},
		{id: "2307", name: "诸葛瑾"},
		{id: "2308", name: "夏侯渊"},
		{id: "2309", name: "张郃"},
		{id: "2310", name: "潘璋"},
		{id: "2311", name: "马忠"},
		{id: "2312", name: "周仓"},
		{id: "2313", name: "陈到"},
		{id: "2314", name: "吴国太"},
		{id: "2315", name: "大乔"},
		{id: "2316", name: "田丰"},
		{id: "2317", name: "沮授"},
		{id: "2318", name: "卢植"},
		{id: "2319", name: "钟繇"},
		{id: "2320", name: "董承"},
		{id: "2321", name: "吉平"},
		{id: "2322", name: "伏完"},
		{id: "2401", name: "司马师"},
		{id: "2402", name: "司马昭"},
		{id: "2403", name: "公孙康"},
		{id: "2404", name: "公孙渊"},
		{id: "2405", name: "蒋琬"},
		{id: "2406", name: "费祎"},
		{id: "2407", name: "李典"},
		{id: "2408", name: "臧霸"},
		{id: "2409", name: "步练师"},
		{id: "2410", name: "孙鲁班"},
		{id: "2411", name: "张燕"},
		{id: "2412", name: "胡车儿"},
		{id: "2413", name: "陈登"},
		{id: "2414", name: "陈矫"},
		{id: "2415", name: "何进"},
		{id: "2416", name: "张让"},
		{id: "2417", name: "纪灵"},
		{id: "2418", name: "潘凤"},
		{id: "2419", name: "南华老仙"},
		{id: "2420", name: "紫虚上人"},

		// Qunxiongbansha, id: "3xxx"

		// Zhanguobansha, id: "4xxx"

		// Others, so on
	];
	app.roleLinkArray = [];

	_.each(app.rolePairs, function(rolePair) {
		var roleLink = "";
		if (4 === rolePair.id.length) {
			roleLink = "<a href='#roles/" + rolePair.id.substring(0, 2) + "/" + rolePair.id + "'>" + rolePair.name + "</a>";
		}
		app.roleLinkArray[rolePair.id] = roleLink;
	});
	
})(UtilManager);