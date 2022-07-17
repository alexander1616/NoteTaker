import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"

function SignUpForm() {

    const history = useHistory()

    const [user, setUser] = useState({
        userName: '',
        password: '',
        displayName: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3000/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        history.push(`/`)
    }

    return (
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="userName">User Name</label>
                        <input
                            required
                            value={user.userName}
                            onChange={e => setUser({ ...user, userName: e.target.value })}
                            className="form-control"
                            id="userName"
                            name="userName"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="displayName">Display Name</label>
                        <input
                            required
                            value={user.displayName}
                            onChange={e => setUser({ ...user, displayName: e.target.value })}
                            className="form-control"
                            id="displayName"
                            name="displayName"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							required
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value})}
							className="form-control"
							id="password"
							name="password"
							/>
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </form>
        </main>
    )
}

export default SignUpForm