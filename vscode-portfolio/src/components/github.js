import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import '../styles/github.css';

function GitHub() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      const response = await fetch("https://api.github.com/users/DAlsabrook");
      const user = await response.json();
      Object.entries(user).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });
      setUserProfile(user);
    }

    fetchUserProfile();
  }, []);

  return (
    <main className="Github">
      <div className="content-container">
        <p>github page</p>
        {userProfile && (userProfile.public_repos ? <p>Repos: {userProfile.public_repos}</p> : <p>N/a</p>)}
        <GitHubCalendar username="DAlsabrook" />
      </div>
    </main>
  )
}

export default GitHub;
