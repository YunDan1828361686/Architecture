import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: '/Refresh',
        name: 'Refresh',
        meta: {
          title: '刷新中~',
          hideInMenu: true
        },
        component: () => import('@/view/error-page/Refresh.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'org_tree_page',
        name: 'org_tree_page',
        meta: {
          icon: 'ios-people',
          title: '组织结构树'
        },
        component: () => import('@/view/components/org-tree')
      }
    ]
  },
  {
    path: '/tools_methods',
    name: 'tools_methods',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'tools_methods_page',
        name: 'tools_methods_page',
        meta: {
          icon: 'ios-hammer',
          title: '工具方法',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      }
    ]
  },
  {
    path: '/skill',
    name: 'skill',
    meta: {
      icon: 'ios-construct',
      title: '技巧'
    },
    component: Main,
    children: [
      {
        path: 'Promise',
        name: 'Promise',
        meta: {
          title: 'Promise'
        },
        component: () => import('@/view/skill/Promise.vue')
      },
      {
        path: 'Router_method',
        name: 'Router_method',
        meta: {
          title: 'Router_method'
        },
        component: () => import('@/view/skill/Router_method.vue')
      },
      {
        path: 'Perform_optimization',
        name: 'Perform_optimization',
        meta: {
          title: 'Perform_optimization'
        },
        component: () => import('@/view/skill/Perform_optimization.vue')
      }
    ]
  },
  {
    path: '/Table',
    name: 'Table',
    meta: {
      icon: 'md-menu',
      title: '表格'
    },
    component: Main,
    children: [
      {
        path: 'Table_csv',
        name: 'Table_csv',
        meta: {
          title: 'Table_csv'
        },
        component: () => import('@/view/Table/Table_csv.vue')
      },
      {
        path: 'Table_excel',
        name: 'Table_excel',
        meta: {
          title: 'Table_excel'
        },
        component: () => import('@/view/Table/Table_excel.vue')
      },
      {
        path: 'Table_tree',
        name: 'Table_tree',
        meta: {
          title: 'Table_tree'
        },
        component: () => import('@/view/Table/Table_tree.vue')
      },
      {
        path: 'Table_expand',
        name: 'Table_expand',
        meta: {
          title: 'Table_expand'
        },
        component: () => import('@/view/Table/Table_expand.vue')
      },
      {
        path: 'Form_search',
        name: 'Form_search',
        meta: {
          title: 'Form_search'
        },
        component: () => import('@/view/Table/Form_search.vue')
      }
      // {
      //   path: 'level_2_2',
      //   name: 'level_2_2',
      //   meta: {
      //     access: ['super_admin'],
      //     showAlways: true,
      //     title: '二级-2'
      //   },
      //   component: parentView,
      //   children: [
      //     {
      //       path: 'level_2_2_1',
      //       name: 'level_2_2_1',
      //       meta: {
      //         title: '三级'
      //       },
      //       component: () => import('@/view/Table/level-2-2/level-2-2-1.vue')
      //     },
      //     {
      //       path: 'level_2_2_2',
      //       name: 'level_2_2_2',
      //       meta: {
      //         title: '三级'
      //       },
      //       component: () => import('@/view/Table/level-2-2/level-2-2-2.vue')
      //     }
      //   ]
      // },

    ]
  },
  {
    path: '/File',
    name: 'File',
    meta: {
      icon: 'md-paper',
      title: 'File'
    },
    component: Main,
    children: [
      {
        path: 'Upload_img',
        name: 'Upload_img',
        meta: {
          title: 'Upload_img'
        },
        component: () => import('@/view/File/Upload_img.vue')
      },
      {
        path: 'Upload_zip',
        name: 'Upload_zip',
        meta: {
          title: 'Upload_zip'
        },
        component: () => import('@/view/File/Upload_zip.vue')
      },
      {
        path: 'Download',
        name: 'Download',
        meta: {
          title: 'Download'
        },
        component: () => import('@/view/File/Download.vue')
      },
      {
        path: 'Upload_excel',
        name: 'Upload_excel',
        meta: {
          title: 'Upload_excel'
        },
        component: () => import('@/view/File/Upload_excel.vue')
      },
      {
        path: 'Download_excel',
        name: 'Download_excel',
        meta: {
          title: 'Download_excel'
        },
        component: () => import('@/view/File/Download_excel.vue')
      }
    ]
  },
  {
    path: '/Echarts',
    name: 'Echarts',
    meta: {
      icon: 'md-trending-up',
      title: 'Echarts'
    },
    component: Main,
    children: [
      {
        path: 'Double_Y',
        name: 'Double_Y',
        meta: {
          title: 'Double_Y'
        },
        component: () => import('@/view/Echarts/Double_Y.vue')
      },
      {
        path: 'Demo',
        name: 'Demo',
        meta: {
          title: 'Demo'
        },
        component: () => import('@/view/Echarts/Demo.vue')
      }
    ]
  },
  {
    path: '/Map',
    name: 'Map',
    meta: {
      icon: 'md-trending-up',
      title: 'Map'
    },
    component: Main,
    children: [
      {
        path: 'Demo1',
        name: 'Demo1',
        meta: {
          title: 'Demo1'
        },
        component: () => import('@/view/Map/Demo1.vue')
      },
      {
        path: 'Demo2',
        name: 'Demo2',
        meta: {
          title: 'Demo2'
        },
        component: () => import('@/view/Map/Demo2.vue')
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
