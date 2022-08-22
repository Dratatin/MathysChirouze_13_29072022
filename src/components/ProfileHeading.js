import { Fragment, useState, useEffect } from "react"
import RenameForm from "../components/RenameForm"
import Loader from "../components/Loader"
import Button from "../components/Button"
import { useSelector } from "react-redux"

function ProfileHeading() {
    const status = useSelector(state => state.status)
    const user = useSelector(state => state.user)
    const error = useSelector(state => state.error)

    const [isLoading, setIsLoading] = useState(false)
    const [formOpen, setFormOpen] = useState(false)
    const [username, setUsername] = useState({
        firstName: "",
        lastName: ""
    })

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

    return (
        <div className="profile-header">
            {formOpen === true ?
                <Fragment>
                    <h1>Welcome back<br />{username.firstName} {username.lastName}!</h1>
                    <RenameForm formOpen={formOpen} setFormOpen={setFormOpen} username={username} setUsername={setUsername}></RenameForm>
                </Fragment>
                : (isLoading ?
                    <Loader></Loader>
                    : <Fragment>
                        <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                        {error.status !== null ?
                            <span className="error-msg">Impossible de modifier vos informations pour le moment</span> : null
                        }
                        <Button state={formOpen} setState={setFormOpen} content="Edit Name"></Button>
                    </Fragment>
                )
            }
        </div>
    )
}

export default ProfileHeading