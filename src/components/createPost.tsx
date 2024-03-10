// createPost.tsx

import React, { useState } from 'react';

interface PostFormProps {
  onSubmit: (postData: FormData) => void;
}

const CreatePost: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);

    if (image) {
      formData.append('image', image);
    }

    onSubmit(formData);
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />

        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={4} required></textarea><br />

        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="Academic Resources">Academic Resources</option>
          <option value="Career Services">Career Services</option>
          <option value="Campus">Campus</option>
          <option value="Culture">Culture</option>
          <option value="Local Community Resources">Local Community Resources</option>
          <option value="Social">Social</option>
          <option value="Sports">Sports</option>
          <option value="Health and Wellness">Health and Wellness</option>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Alumni">Alumni</option>
        </select><br />

        <label htmlFor="image">Attach Picture:</label>
        <input type="file" id="image" onChange={handleFileChange} /><br />

        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default CreatePost;
