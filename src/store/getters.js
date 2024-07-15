const getters = {
  // sidebar: state => state.app.sidebar,
  // size: state => state.app.size,
  // device: state => state.app.device,
  // permission_routes: state => state.permission.routes,
  // visitedViews: state => state.tagsView.visitedViews,
  // cachedViews: state => state.tagsView.cachedViews,
  // roles: state => state.user.roles,
  // token: state => state.user.token,
  blog_info: (state) => state.app.blog_info,
  theme: (state) => state.app.theme,
  wallpaper: (state) => state.app.wallpaper,
  part_page: (state) => state.app.part_page,
  emoji_list: (state) => state.app.emoji_list,
  title: (state) => state.app.title,
  toc_list: (state) => state.app.toc_list,
  top_image: (state) => state.app.top_image,

  sidebar: (state) => state.app.sidebar,
  user_id: (state) => state.user.user_id,
  avatar: (state) => state.user.avatar,
  email: (state) => state.user.email,
  nickname: (state) => state.user.nickname,
};
export default getters;
