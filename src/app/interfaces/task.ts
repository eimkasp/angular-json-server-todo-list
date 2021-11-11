// id? - klautukas nurodo, kad sis laukelis gali buti null
export interface Task {
  id?: number,
  title: string,
  author: string,
  completed: boolean // true arba false
}
