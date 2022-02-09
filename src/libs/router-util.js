import store from '@/store'
import Main from '@/components/main'

// 这里返回的是动态的路由
export const loadMenu = () => {
  let list = []
  let data = JSON.parse(JSON.stringify(store.state.user.menuListData))
  if (data.length == 0) return list
  list = formatMenu(data)
  return list
}

// 格式化动态的路由
export const formatMenu = (list) => {
  let result = []
  list.forEach(element => {
    if (element.component == "Main") {
      element.component = Main
    } else {
      const URl_ = JSON.parse(JSON.stringify(element.component))
      element.component = () => import("@/view" + URl_)
    }
    if (element.children && element.children.length) {
      element.children = formatMenu(element.children)
    }
    result.push(element)
  });
  return result
}
