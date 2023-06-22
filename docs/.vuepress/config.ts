import { defaultTheme } from 'vuepress'

export default {
  theme: defaultTheme({
	title: '惊涵系统U盘',
    logo: 'https://sihengl.gitee.io/jinghan/logo/Upan.png',
	head: [['link', { rel: 'icon', href: 'https://sihengl.gitee.io/jinghan/logo/Upan.png' }]],
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
//   plugins: [
//      docsearchPlugin({
//        // 配置项
//      }),
//    ],
}