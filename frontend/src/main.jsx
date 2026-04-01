import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from "react-oidc-context"

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_BW4sqvuxD",
  client_id: "2g81gs3e1d9lkpb28i88jk41ru",
  redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "email openid phone",
}

createRoot(document.getElementById('root')).render(
  <AuthProvider {...cognitoAuthConfig}>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>
)
