import css from "./Sidebar.module.css"
import sideBarArrow from '../../icons/sideBarArrow.png'
import {NavLink} from "react-router-dom";

type Props ={
    isDark:Boolean;
    setIsDark:any;
}
export const Sidebar: React.FC<Props> = ({isDark,setIsDark}) =>{
    return(
        <div className={css.sideBarWrap}>
            <div>
                <button className={css.switchBtn} onClick={()=>setIsDark(!isDark)}>{isDark ? "light" : "dark"}</button>
            </div>
            <ul className={css.list}>
                <li className={css.item} >
                    <NavLink className={({ isActive }) => isActive ? `${css.active}` : ''} to={"/"}>Home</NavLink></li>
                <li className={css.item} >
                    <NavLink className={({ isActive }) => isActive ? `${css.active}` : ''} to={"/info"}>Info</NavLink></li>
                <li className={css.item} >
                   <NavLink className={({ isActive }) => isActive ? `${css.active}` : ''} to={"/slider"}>Slider</NavLink>
                </li>
                <li className={css.item} >
                  <NavLink className={({ isActive }) => isActive ? `${css.active}` : ''} to={"/tailWindSlider"}>Tail Wind Slider</NavLink>
                </li>
                <li className={css.item} >
                    <NavLink className={({ isActive }) => isActive ? `${css.active}` : ''} to={"/modalWindow"}>Modal</NavLink>
                </li>
                <li className={css.item} >
                    <NavLink className={({ isActive }) => isActive ? `${css.active}` : ''} to={"/gridLayout"}>Grid Layout</NavLink>
                </li>
                <li className={css.item} >
                    <NavLink className={({ isActive }) => isActive ? `${css.active}` : ''} to={"/ReactQuery"}>React Query</NavLink>
                </li>
            </ul>
            <img src={sideBarArrow} width={40} alt="sideBarArrow" className={css.arrowIcon}/>
        </div>
    )
}