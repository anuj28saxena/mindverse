import React from "react";
// import "../styles/profile.css";

const ProfilePage = () => {
  const userData = {
    name: "MindWarrior",
    startDate: "2025-06-14",
    gamesPlayed: 24,
    wins: 16,
    longestStreak: 5,
  };

  return (
    <div className="profile-container">
      <h2>👤 Your Profile</h2>

      <div className="user-info">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Started:</strong> {userData.startDate}</p>
        <p><strong>Games Played:</strong> {userData.gamesPlayed}</p>
        <p><strong>Wins:</strong> {userData.wins}</p>
        <p><strong>Longest Win Streak:</strong> {userData.longestStreak}</p>
      </div>

      <button className="reset-btn">Reset Progress</button>
    </div>
  );
};

export default ProfilePage;
