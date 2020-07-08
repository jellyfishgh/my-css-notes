const pages = ['home', 'float', 'flex']

const routes = pages.map(name => ({
  name,
  path: `/${name}`,
  component: () => import(`../pages/${name}/index.vue`)
}))

export default routes
