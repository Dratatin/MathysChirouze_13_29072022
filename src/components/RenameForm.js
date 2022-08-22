import { useState } from "react"
import { useStore, useSelector } from "react-redux"
import { editUserProfil } from "../services/API"

function RenameForm({ formOpen, setFormOpen, username, setUsername }) {
    const store = useStore()
    const token = useSelector(state => state.token)
    const user = useSelector(state => state.user)
    const [validInput, setValidInput] = useState({
        invalidmsg: null,
        length: {
            firstName: false,
            lastName: false
        }
    })
    const patern = new RegExp(/^[a-zA-Z]*$/)

    const handleChange = (e) => {
        if (patern.test(e.target.value) === true) {
            if (e.target.value.length > 1) {
                setValidInput({
                    ...validInput,
                    invalidmsg: null,
                    length: {
                        ...validInput.length,
                        [e.target.name]: true,
                    }
                })
            }
            else {
                setValidInput({
                    ...validInput,
                    invalidmsg: null,
                    length: {
                        ...validInput.length,
                        [e.target.name]: false
                    }
                })
            }
            setUsername({
                ...username,
                [e.target.name]: e.target.value
            })
        }
        else {
            setValidInput({
                ...validInput,
                invalidmsg: "Veuillez saisir des caractères compris entre a et z.",
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validInput.length.firstName === true && validInput.length.lastName === true) {
            editUserProfil(store, token, username)
            setUsername({
                ...username,
                firstName: "",
                lastName: ""
            })
            setFormOpen(!formOpen)
        }
        else {
            setValidInput({
                ...validInput,
                invalidmsg: "Veuillez saisir au moins 2 caractères dans chaque champs.",
            })
        }
    }

    const handleReset = () => {
        setUsername({
            ...username,
            firstName: "",
            lastName: ""
        })
        setFormOpen(!formOpen)
    }

    return (
        <form className="renameForm">
            {validInput.invalidmsg !== null ?
                <div className="error-msg">{validInput.invalidmsg}</div>
                : null
            }
            <div className="renameForm__column">
                <div className="renameForm__column__wrapper renameForm__column__wrapper--end">
                    <input type="text" name="firstName" value={username.firstName} onChange={handleChange} placeholder={user.firstName} required></input>
                </div>
                <div className="renameForm__column__wrapper renameForm__column__wrapper--start">
                    <input type="text" name="lastName" value={username.lastName} onChange={handleChange} placeholder={user.lastName} required></input>
                </div>
            </div>
            <div className="renameForm__column">
                <div className="renameForm__column__wrapper renameForm__column__wrapper--end">
                    <input className="button" type="submit" onClick={handleSubmit} value="Save"></input>
                </div>
                <div className="renameForm__column__wrapper renameForm__column__wrapper--start">
                    <input className="button" type="reset" onClick={handleReset} value="Cancel"></input>
                </div>
            </div>
        </form >
    )
}

export default RenameForm