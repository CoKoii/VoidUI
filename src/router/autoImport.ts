import { columns } from '@/views/Components/tableData'

interface RouteItem {
  path: string
  name: string
  component: () => Promise<unknown>
}
export const ComponentsChildren = () => {
  const children: RouteItem[] = []

  columns.forEach((column) => {
    if (column.children) {
      column.children.forEach((child) => {
        children.push({
          path: child.path,
          name: child.path.charAt(0).toUpperCase() + child.path.slice(1),
          component: () =>
            import(
              `@/VoidComponents/${child.path.charAt(0).toUpperCase() + child.path.slice(1)}/${child.path.charAt(0).toUpperCase() + child.path.slice(1)}.vue`
            ),
        })
      })
    }
  })

  return children
}
