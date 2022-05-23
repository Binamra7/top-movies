import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/store/index";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const domain: string | any = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId: string | any = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
	<Auth0Provider
		domain="dev-cwszvklk.us.auth0.com"
		clientId="Yq9I7hZHC3jZVLq9WaKdO6wM2GAFqx0b"
		redirectUri={window.location.origin}
		// domain={domain}
		// clientId={clientId}
		// redirectUri={window.location.origin}
	>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</Auth0Provider>
);
