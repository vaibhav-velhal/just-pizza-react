import { PiChefHatThin } from "react-icons/pi";

function Account() {

    
    return(

        <section>
            <header>
                <div className="container text-center mt-5">
                    <PiChefHatThin size={40} style={{color: "#df2620"}} />
                    <h1 className="fw-semibold">My Account</h1>
                    <h2 className="fs-5 text-secondary">Manage your profile, orders and more.</h2>
                </div>
            </header>
        </section>
    )
}

export default Account;