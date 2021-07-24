export default interface IRoute {
  path: string
  id: string
  exact: boolean
  component: any
  props?: any
}
