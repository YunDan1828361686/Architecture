export const showTitle = (item, vm) => {
  return ((item.meta && item.meta.title) || item.name)
}
