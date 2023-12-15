// place files you want to import through the `$lib` alias in this folder.

// 건강정보,연예정보,맛집정보,분양정보,기타정보
export const category_list = [
    {link : 'health', name : '건강'},
    {link : 'news', name : '뉴스'},
    {link : 'estate', name : '분양'},
    {link : 'etc', name : '기타'},
]

export const siteName = '올댓분양'

export const back_api = `${import.meta.env.VITE_SERVER_URL}/api/v3`