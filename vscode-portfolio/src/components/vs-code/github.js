import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

function GitHub() {

  // GitHub REST API to get user profile
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      const response = await fetch("https://api.github.com/users/DAlsabrook");
      const user = await response.json();
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
