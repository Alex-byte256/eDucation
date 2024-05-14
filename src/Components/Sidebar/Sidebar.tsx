import css from "./Sidebar.module.css"
import sideBarArrow from '../../icons/sideBarArrow.png'
import {NavLink} from "react-router-dom";
export const Sidebar = () =>{
    return(
        <div className={css.sideBarWrap}>
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
                <li className={css.item} >Test6</li>
            </ul>
            <img src={sideBarArrow} width={40} alt="sideBarArrow" className={css.arrowIcon}/>
        </div>
    )
}