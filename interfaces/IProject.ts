import { IMember } from "./IMember"



export interface IProject{
  _id: number,
  nameProject: string,
  desc: string,
  img: string,
  notes?: string
  slug: string
  membersManager: IMember[]
}
