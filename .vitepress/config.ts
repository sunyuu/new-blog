import { getArticle } from './theme/server'

export default {
  title: 'sunyuu',
  themeConfig: {
    siteTitle: "Suny's Blog🚀",
    article: getArticle()
  },
  base: '/new-blog/'
}