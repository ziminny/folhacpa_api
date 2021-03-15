import { hashSync } from "bcrypt"

export default (password:string) => {
  return hashSync(password,8);
}