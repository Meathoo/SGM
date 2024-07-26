'use client'

import { auth } from '@/components/auth'

export function HelloUser(){
    let user:string = "";
    user = auth();
    return (user!=="" && (<h3>hello! {user}</h3>));
}