import React from 'react';

function Profile() {
    const token = localStorage.getItem('token');
    if (!token) {
        return <div>Please log in to view your profile</div>;
    }

    return (
        <div>
            <h2>Your Profile</h2>
            <p>Welcome, user! Here you can see your profile information.</p>
        </div>
    );
}

export default Profile;
