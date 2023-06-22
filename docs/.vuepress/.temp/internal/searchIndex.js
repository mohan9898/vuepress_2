export const searchIndex = [
  {
    "title": "产品前言",
    "headers": [
      {
        "level": 2,
        "title": "介绍",
        "slug": "介绍",
        "link": "#介绍",
        "children": []
      },
      {
        "level": 2,
        "title": "声明",
        "slug": "声明",
        "link": "#声明",
        "children": []
      }
    ],
    "path": "/guide/%E4%BA%A7%E5%93%81%E5%89%8D%E8%A8%80.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "使用方法",
    "headers": [
      {
        "level": 2,
        "title": "电脑可以正常启动（win10、win11系统）",
        "slug": "电脑可以正常启动-win10、win11系统",
        "link": "#电脑可以正常启动-win10、win11系统",
        "children": []
      },
      {
        "level": 2,
        "title": "通用安装",
        "slug": "通用安装",
        "link": "#通用安装",
        "children": []
      }
    ],
    "path": "/guide/%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
