import Button from "../components/Button"

function AccountWrapper({ title, amount, amountDcp, button }) {
    return (
        <section className="account">
            <div className="account__wrapper">
                <h3 className="account__wrapper__title"> {title}</h3>
                <p className="account__wrapper__amount"> {amount}</p>
                <p className="account__wrapper__description"> {amountDcp}</p>
            </div>
            <div className="account__wrapper account__wrapper--cta">
                <Button content={button}></Button>
            </div>
        </section>
    )
}

export default AccountWrapper