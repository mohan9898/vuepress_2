import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
  title: '惊涵系统U盘',
  head: [['link', { rel: 'icon', href: 'https://sihengl.gitee.io/jinghan/logo/Upan.png' }]],
  theme: defaultTheme({
	logo: 'https://sihengl.gitee.io/jinghan/logo/Upan.png',
	home: '/',
	navbar: [
	      // NavbarItem
	      {
	        text: '首页',
	        link: '/',
	      },
	      // NavbarGroup
	      {
	        text: '惊涵下载',
	        link: 'https://down.inte.cab',
	      },
	    ],
    sidebar: {
      '/guide/': [
        {
          text: '产品前言',
          collapsible: false,
          children: ['/guide/产品前言.html'],
        },
        {
          text: '操作手册',
          collapsible: false,
          children: ['/guide/操作手册.html'],
        },
      ],
    },
  }),
//搜索
 plugins: [
     searchPlugin({
       locales: {
         '/': {
           placeholder: '搜索',
         },
       },
	   isSearchable: (page) => page.path !== '/',
	   // 允许搜索 Frontmatter 中的 `tags`
	   getExtraFields: (page) => page.frontmatter.tags ?? [],
     }),
   ],
}