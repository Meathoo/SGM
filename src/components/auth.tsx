import { useState, useEffect } from 'react';

const getMe = () => {
    // 從 localStorage 讀取 token
    const token = localStorage.getItem("session_id");
    return fetch(`http://127.0.0.1:8000/auth`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
  };


export function auth() {
    const [user, setUser] = useState("");
    useEffect(() => {
    // 以 getAuthToken 從 localStorage 讀取 token
    if (localStorage.getItem("session_id")) {
        // 有 token 才 call API
        getMe().then((name) => {
        console.log(name)
        if (name!="") {
            setUser(name);
            // localStorage.setItem("logged-in","1")
        }
        });
    }
    }, []);

    return user
}

// export function logout() {
//   localStorage.removeItem("session_id");
//   document.location.href="/";
// }