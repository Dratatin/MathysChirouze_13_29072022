import AccountWrapper from "../components/AccountWrapper"
import Button from "../components/Button"
import RenameForm from "../components/RenameForm"
import Loader from "../components/Loader"
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import { useEffect, useState, Fragment } from "react"

function Profile() {
    const [isLoading, setIsLoading] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const [username, setUsername] = useState({
        firstName: "",
        lastName: ""
    })

    const logged = useSelector(state => state.isAuthenticate)
    const user = useSelector(state => state.user)
    const status = useSelector(state => state.status)

    useEffect(() => {
        if (status === "updating") {
            setIsLoading(true)
        }
        if (status === "resolved" || status === "rejected") {
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [status])

    if (!logged) {
        return (<Navigate to="/" />)
    }
    else {
        return (
            <main className="main main--bgdark" >
                <div className="main__header">
                    {(openForm === true) ?
                        <Fragment>
                            <h1>Welcome back<br />{username.firstName} {username.lastName}!</h1>
                            <RenameForm state={openForm} setState={setOpenForm} username={username} setUsername={setUsername}></RenameForm>
                        </Fragment>
                        : (isLoading) ?
                            <Loader></Loader>
                            :
                            <Fragment>
                                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                                <Button state={openForm} setState={setOpenForm} content="Edit Name"></Button>
                            </Fragment>
                    }
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
}

export default Profile