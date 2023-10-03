import { ResolveFn } from "@angular/router";

export const roleResolve: ResolveFn<string> = (route,state)=>{
    let userRole:any = JSON.parse(localStorage.getItem('user') as string)
    return userRole.role
}
