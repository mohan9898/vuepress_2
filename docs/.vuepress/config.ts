import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nextTick } from 'vue'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'


export default {
  contributors: false,
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
	 backToTopPlugin(),
     searchPlugin({
       locales: {
         '/guide/': {
           placeholder: '搜索',
         },
       },
	   isSearchable: (page) => page.path !== '/',
	   getExtraFields: (page) => page.page ?? [],
     }),
   ],
   setup() {
       const zoom = useMediumZoom()
   
       // ... 进行了一些操作，在当前页面添加了新的图片
   
       // 此时你可能需要手动调用 `refresh` 来让这些新图片支持缩放
       nextTick(() => {
         zoom.refresh()
       })
     },
}
export interface HotKeyOptions {
  /**
   * Value of `event.key` to trigger the hot key
   */
  key: string

  /**
   * Whether to press `event.altKey` at the same time
   *
   * @default false
   */
  alt?: boolean

  /**
   * Whether to press `event.ctrlKey` at the same time
   *
   * @default false
   */
  ctrl?: boolean

  /**
   * Whether to press `event.shiftKey` at the same time
   *
   * @default false
   */
  shift?: boolean
}
