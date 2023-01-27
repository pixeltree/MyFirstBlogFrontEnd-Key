import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <li>
      <button
        onClick={() => loginWithRedirect()}
        className="relative block px-3 py-2 transition hover:text-teal-500 whitespace-nowrap"
      >
        Login
      </button>
    </li>
  )
};

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <li>
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="relative block px-3 py-2 transition hover:text-teal-500 whitespace-nowrap"
      >
        Log out
      </button>
    </li>
  )
}

const LoginLogoutLink = () => {
  const { isAuthenticated } = useAuth0()

  return (
    isAuthenticated ?
      <LogoutButton /> :
      <LoginButton />
  )
}

export default LoginLogoutLink
