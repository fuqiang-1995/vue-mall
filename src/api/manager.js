import axios from "@/axios/axios";

export function login(username, password){
    axios.post("/admin/login",
        {username, password}
    )
}

export function getinfo(){

}