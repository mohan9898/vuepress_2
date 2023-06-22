export const themeData = JSON.parse("{\"title\":\"惊涵系统U盘\",\"logo\":\"https://sihengl.gitee.io/jinghan/logo/Upan.png\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://sihengl.gitee.io/jinghan/logo/Upan.png\"}]],\"home\":\"/\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"惊涵下载\",\"link\":\"https://down.inte.cab\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"产品前言\",\"collapsible\":false,\"children\":[\"/guide/产品前言.html\"]},{\"text\":\"操作手册\",\"collapsible\":false,\"children\":[\"/guide/操作手册.html\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
