import AccountWrapper from "../components/AccountWrapper"
import ProfileHeading from "../components/ProfileHeading"
import { Navigate } from 'react-router-dom'

function Profile() {
    const logged = JSON.parse(localStorage.getItem("isAuthenticate"))

    if (!logged) {
        return (
            <Navigate to="/" />
        )
    }
    else {
        return (
            <main className="main main--bgdark" >
                <ProfileHeading />
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
}

export default Profile