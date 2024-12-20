import React, { useState } from "react";
import "./ProfilePage.css";

// Import default profile image
import defaultProfileImage from "../Assets/profileIcon.png"; // Adjust the path based on your image location
import cameraIcon from "../Assets/camera.png"; // Path to the camera icon

const ProfilePage = () => {
  // Dynamic user data
  const [userName, setUserName] = useState("Ahmed Gaid");
  const [userAge, setUserAge] = useState(28);
  const [userAddress, setUserAddress] = useState("1234 Elm St, Cairo, Egypt");
  const [userPhone, setUserPhone] = useState("+20 123 456 789");
  const [userEmail, setUserEmail] = useState("ahmed.gaid@example.com");
  const [aboutMe, setAboutMe] = useState("Hello! I'm Ahmed, a dedicated reader living in New York. With a deep affection for mystery novels, my bookshelf is filled with Agatha Christie's beloved classics and contemporary thrillers. On this page, I'll share thoughtful reviews, personalized recommendations, and engaging discussions. Let's connect over our shared love of reading!");
  const [books, setBooks] = useState(["The Catcher in the Rye by J.D. Salinger", "The Hobbit by J.R.R. Tolkien", "To Kill a Mockingbird by Harper Lee"]);

  // Default profile image state
  const [profileImage, setProfileImage] = useState(defaultProfileImage);

  // State to toggle visibility of the menu (Upload/Delete options)
  const [menuVisible, setMenuVisible] = useState(false);

  // State to toggle between edit and view mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle profile image change (file upload)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result); // Update the profile image with the new file
      reader.readAsDataURL(file); // Convert file to a Data URL
    }
  };

  // Handle image delete (reset to default)
  const handleImageDelete = () => {
    setProfileImage(defaultProfileImage); // Reset to the default profile image
  };

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle between edit and view mode
  };

  // Handle adding a new book
  const handleAddBook = () => {
    setBooks([...books, ""]); // Add an empty string to the list to allow for a new book
  };

  // Handle book changes
  const handleBookChange = (index, event) => {
    const updatedBooks = [...books];
    updatedBooks[index] = event.target.value; // Update the book at the specified index
    setBooks(updatedBooks);
  };

  // Handle removing a book
  const handleRemoveBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks); // Remove the book at the specified index
  };

  return (
    <div className="profile-container">
      {" "}
      {/* Profile Header */}{" "}
      <header className="profile-header">
        <h1> Profile </h1> <p className="profile-quote"> "Books are a uniquely portable magic." - Stephen King </p>{" "}
      </header>{" "}
      {/* Profile Box */}{" "}
      <div className="profile-box">
        {" "}
        {/* About Me */}{" "}
        <div className="profile-section about-me">
          <h2> About Me </h2> {isEditing ? <textarea value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} rows="5" /> : <p> {aboutMe} </p>} <h3> Interesting Books </h3>{" "}
          {isEditing ? (
            <div>
              {" "}
              {books.map((book, index) => (
                <div key={index} className="book-item">
                  <input type="text" value={book} onChange={(e) => handleBookChange(index, e)} placeholder="Enter book name" />
                  <button onClick={() => handleRemoveBook(index)} className="remove-book-btn">
                    {" "}
                    Remove{" "}
                  </button>{" "}
                </div>
              ))}{" "}
              <button onClick={handleAddBook} className="add-book-btn">
                {" "}
                Add Book{" "}
              </button>{" "}
            </div>
          ) : (
            <ul>
              {" "}
              {books.map((book, index) => (
                <li key={index}>
                  <strong> {book} </strong>{" "}
                </li>
              ))}{" "}
            </ul>
          )}{" "}
        </div>
        {/* Profile Image (Second container with only image) */}{" "}
        <div className="profile-section image-container">
          <div className="image-box">
            <img src={profileImage} alt="Profile" />
          </div>{" "}
          {/* Camera Icon and Menu */}{" "}
          <div className="image-actions">
            <div className="camera-icon" onClick={() => setMenuVisible(!menuVisible)}>
              <img src={cameraIcon} alt="" />
            </div>{" "}
            {menuVisible && (
              <div className="image-menu">
                <label htmlFor="file-upload" className="menu-item">
                  Upload Image{" "}
                </label>{" "}
                <input type="file" id="file-upload" style={{ display: "none" }} onChange={handleImageChange} />{" "}
                <div className="menu-item" onClick={handleImageDelete}>
                  Delete Image{" "}
                </div>{" "}
              </div>
            )}{" "}
          </div>{" "}
        </div>
        {/* Details */}{" "}
        <div className="profile-section details-container">
          <h2> Details </h2> {/* Name */}{" "}
          <div className="detail-item">
            <strong> Name: </strong> {isEditing ? <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} /> : userName}{" "}
          </div>{" "}
          {/* Age */}{" "}
          <div className="detail-item">
            <strong> Age: </strong> {isEditing ? <input type="number" value={userAge} onChange={(e) => setUserAge(e.target.value)} /> : userAge}{" "}
          </div>{" "}
          {/* Address */}{" "}
          <div className="detail-item">
            <strong> Address: </strong> {isEditing ? <input type="text" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} /> : userAddress}{" "}
          </div>{" "}
          {/* Phone */}{" "}
          <div className="detail-item">
            <strong> Phone: </strong> {isEditing ? <input type="text" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} /> : userPhone}{" "}
          </div>{" "}
          {/* Email */}{" "}
          <div className="detail-item">
            <strong> Email: </strong> {isEditing ? <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} /> : userEmail}{" "}
          </div>{" "}
          <button className="edit-profile-btn" onClick={handleEditClick}>
            {" "}
            {isEditing ? "Save Profile" : "Edit Profile"}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ProfilePage;
