import React from "react";
import Style from "./MikuLove.module.css"

export function MikuLove(){
    return (
<>
<div className={Style.MikuLoveContain}>   
<h1 className={Style.Toptext}>I love miku</h1>
<a href="https://github.com/LeahJKH" className={Style.bottomText}>this is me</a>
</div>
</>
    )
}