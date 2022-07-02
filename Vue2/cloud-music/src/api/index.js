// api文件夹下 各个请求模块js, 都统一来到index.js再向外导出
import {recommendMusic, newMusic} from '@/api/Home'
import {hotSearch, searchResult} from '@/api/Search'
import {getSongById, getLyricById} from '@/api/Play'

export const recommendMusicAPI = recommendMusic
export const newMusicAPI = newMusic

export const hotSearchAPI = hotSearch
export const searchResultAPI = searchResult

export const getSongByIdAPI = getSongById
export const getLyricByIdAPI = getLyricById
