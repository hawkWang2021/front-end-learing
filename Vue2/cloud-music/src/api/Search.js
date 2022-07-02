import request from '@/utils/request'

// 热搜关键字
export const hotSearch = params =>
	request({
		params,
		url: '/search/hot'
	})
// 搜索结果列表
export const searchResult = params =>
	request({
		params,
		url: '/cloudsearch'
	})
