'use client'

import { auth } from '@/components/auth'
import { Button } from './Button';

export function HelloUser(){
    let user:string = "";
    user = auth();
    if(user!=="")
        return (<h3>hello! {user}</h3>);
    else
        return (
            <div>
                <div className="not-prose mb-16 mt-6 flex gap-3">
                    <Button href="/registration" arrow="right">
                        <>立即註冊</>
                    </Button>
                    <Button href="/login" variant="outline">
                        <>已有帳號？登入</>
                    </Button>
                </div>
            </div>
        );
}