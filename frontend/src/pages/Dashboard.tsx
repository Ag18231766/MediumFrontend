import { useNavigate } from "react-router-dom";
import { TagReturnType } from "../hooks.tsx/GetTags";
import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { PostsRenderComponent } from "../components/PostsRender";

export function Dashboard(){


  return (
        <div>
            <PostsRenderComponent></PostsRenderComponent>
            Dashboard
        </div>
  )  
}



function AppBarDashboard({type}:{type:string}){
    const navigation = useNavigate();
    function GoToSpecificPosts(){
      navigation('/PostsView');
    }
    return(
      <div>
        <button onClick={GoToSpecificPosts}>SpecificPosts</button>
      </div>
    )
}




