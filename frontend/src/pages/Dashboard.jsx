import { useAuth } from 'react-oidc-context'

const Dashboard = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "2g81gs3e1d9lkpb28i88jk41ru";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain = "https://us-west-2bw4sqvuxd.auth.us-west-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  }
  return (
    <div>
      <button onClick={signOutRedirect}>Sign Out</button>
    </div>
  )
}

export default Dashboard