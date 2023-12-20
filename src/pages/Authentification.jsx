import "./authentification.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Authentification = () => {
  const [connecter, setConnecter] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [courriel, setCourriel] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigate();

  const login = () => {
    navigation("/menu");
  };

  const UpdateUsername = (username) => {
    setUsername(username);
  };

  const UpdatePassword = (password) => {
    setPassword(password);
    setIsPasswordValid(password.length >= 8);
    // Set or clear password error message
    if (password.length < 8) {
      setPasswordError("Le mot de passe doit avoir au moins 8 caractères.");
    } else {
      setPasswordError("");
    }
  };

  const UpdateCourriel = (courriel) => {
    setCourriel(courriel);
    // Validate email using a regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setIsValidEmail(emailRegex.test(courriel));
    // Set or clear email error message
    if (!emailRegex.test(courriel)) {
      setEmailError("L'adresse email n'est pas valide.");
    } else {
      setEmailError("");
    }
  };

  const toggleMode = () => {
    setConnecter(!connecter);
  };

  const handleLogin = () => {
    if (connecter && (!isValidEmail || !isPasswordValid)) {
      return;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="form-container"
    >
      <p className="title">{connecter ? "Se connecter" : "S'inscrire"}</p>
      <form className="form">
        {connecter ? (
          <>
            <div className="input-group">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=""
                value={username}
                onChange={(e) => UpdateUsername(e.target.value)}
              ></input>
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={password}
                onChange={(e) => UpdatePassword(e.target.value)}
                className={passwordError ? "error-border" : ""}
              ></input>
              {passwordError && <p className={`error-text`}>{passwordError}</p>}
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
            <button
              className="sign"
              onClick={(handleLogin, login)}
              disabled={!isValidEmail || !isPasswordValid}
            >
              Se connecter
            </button>
          </>
        ) : (
          <>
            <div className="input-group">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=""
                onChange={(e) => UpdateUsername(e.target.value)}
                value={username}
              ></input>
            </div>
            <div className="input-group">
              <label htmlFor="email">Courriel</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                onChange={(e) => UpdateCourriel(e.target.value)}
                value={courriel}
                className={emailError ? "error-border" : ""}
              ></input>
              {emailError && <p className={`error-text`}>{emailError}</p>}
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={password}
                onChange={(e) => UpdatePassword(e.target.value)}
                className={passwordError ? "error-border" : ""}
              ></input>
              {passwordError && <p className={`error-text`}>{passwordError}</p>}
            </div>
            <button
              className="sign mt-6"
              onClick={(handleLogin, login)}
              disabled={!isValidEmail || !isPasswordValid}
            >
              S'inscrire
            </button>
          </>
        )}
      </form>
      <div className="social-message">
        <div className="line"></div>
        {connecter && <p className="message">Autre méthode</p>}
        <div className="line"></div>
      </div>
      <div className="social-icons">
        <button aria-label="Log in with Google" className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="signup">
        {connecter ? "vous n'avez pas de compte ?" : "vous avez un compte ? "}
        <a rel="noopener noreferrer" href="#" className="" onClick={toggleMode}>
          {connecter ? "S'inscrire" : "Se connecter"}
        </a>
      </p>
    </motion.div>
  );
};

export default Authentification;
