import css from "./Sidebar.module.css"
import sideBarArrow from '../../icons/sideBarArrow.png'
export const Sidebar = () =>{
    return(
        <div className={css.sideBarWrap}>
            SideBar test
            <img src={sideBarArrow} width={40} alt="sideBarArrow" className={css.arrowIcon}/>
        </div>
    )
}