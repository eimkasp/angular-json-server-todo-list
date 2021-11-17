import { User } from "./user";

// id? - klautukas nurodo, kad sis laukelis gali buti null
export interface Task {
  id?: number,
  title: string,
  author: string,
  completed: boolean, // true arba false
  priority? : string
  userId : number // Laukelis kuris nurodo userId - users lenteleje/objekte - db.json faile
  user?: User // Kreipiantis i http://localhost:3000/tasks?_expand=user JSON server mums grazins user duomenis papildomame user stulpelyje
}
