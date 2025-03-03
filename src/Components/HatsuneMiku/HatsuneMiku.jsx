import React from "react";
import Style from "./HatsuneMiku.module.css"

export function HatsuneMiku(){
   
    return (
<>
<div className={Style.MikuLoveContain}>   
<img src="https://miku-api.vercel.app/pfp/pfp2.webp" alt="" className={Style.mikuImg}/>
<div>

<h1 className={Style.Toptext}>Hamsume Mimikyu</h1>
<a href="https://github.com/LeahJKH/MikuApi" className={Style.bottomText}>miku repo</a>
</div>
</div>
</>
    )
}