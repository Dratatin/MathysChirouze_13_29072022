import { Fragment } from "react"

function Button({ content, state, setState }) {
    const handleClick = (e) => {
        e.preventDefault()
        setState(!state)
    }

    return (
        <Fragment>
            {setState ?
                <button onClick={handleClick} className="button">{content}</button>
                :
                <button className="button">{content}</button>
            }
        </Fragment>
    )
}

export default Button