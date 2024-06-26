import { useNavigate } from "react-router-dom";
import "./navbar.scss";
import { SelectedItem } from "../../App";

interface NavbarProps {
    selectedItems: SelectedItem[];
}

export const Navbar = (props: NavbarProps) => {
    const navigate = useNavigate();

    return (
        <div className="navbar">       
            <div className="navbar__home">
                <button onClick={() => navigate("/")} className="material-symbols-outlined" onKeyDown={()=>{}}>
                    home
                </button>
            </div>
            <button className="navbar__cart" onClick={()=> navigate("/payment")} onKeyDown={()=>{}}>
                <span className="material-symbols-outlined">
                    shopping_bag
                </span>
                <span className="navbar__cart__items">
                    {
                        props.selectedItems.reduce(
                            (totalCount, item) => totalCount + item.Quantity, 0
                        )
                    }


                </span>
            </button>     
        </div>


    )
}