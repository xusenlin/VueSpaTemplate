let menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
  name: '首页',
  path: '/',
  icon: 'fa fa-tachometer',
};


/**
 * 字体图标
 * @type {{name: string, icon: string, children: {}}}
 */
menu.font_icon = {
  name: '字体图标',
  icon: 'fa fa-th',
  children: {}
};
let icon = menu.font_icon.children;

icon.font_awesome = {
  name: 'FontAwesome 4.7',
  path: '/font_awesome',
  permission: '',
};

/**
 * 用户管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.user_manage = {
  name: '用户管理',
  icon: 'fa fa-user-circle-o',
  children: {}
};
let UserManage = menu.user_manage.children;

UserManage.user = {
  name: '普通用户组',
  path: '/user',
  permission: 'UserView',
};
UserManage.user_admin = {
  name: '管理用户组',
  path: '/user_admin',
  permission: 'UserAdminView',
};

/**
 * 内容管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.content_manage = {
  name: '内容管理',
  icon: 'fa fa-file-text-o',
  children: {}
};

let ContentManage = menu.content_manage.children;

ContentManage.category = {
  name: '分类管理',
  path: '/category_manage',
  permission: 'CategoryManageView',
};
ContentManage.post = {
  name: '文章管理',
  path: '/post_manage',
  permission: 'PostManageView',
};
ContentManage.message = {
  name: '留言管理',
  path: '/message_manage',
  permission: 'MessageManageView',
};


export default menu;