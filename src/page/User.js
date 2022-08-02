import AccountWrapper from "../components/AccountWrapper"
import Button from "../components/Button"

function User() {
    return (
        <main className="main main--bgdark" >
            <div className="main__header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <Button content="Edit Name"></Button>
            </div >
            <h2 className="sr-only"> Accounts</h2>
            <AccountWrapper
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                amountDcp="Available Balance"
                button="View transactions">
            </AccountWrapper>
            <AccountWrapper
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                amountDcp="Available Balance"
                button="View transactions">
            </AccountWrapper>
            <AccountWrapper
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                amountDcp="Current Balance"
                button="View transactions">
            </AccountWrapper>
        </main>
    )
}

export default User