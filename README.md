# Colibri Feed App

## Description
This is a full-stack Twitter-like social media application where users can sign up, create posts, interact with posts through likes and comments, and manage their profiles.

## Features

### Authentication
- Sign up with email and password (with email verification)
- Sign up with Google authentication
- Sign in with email and password
- Log out

### Posts
- Create new post (with title, text, and optional photo)
- Edit existing post (update title, text, photo)
- Delete post
- View all my posts
- View posts of other users

### Feed
- Paginated feed of posts
- Posts sorted by chronologically
- Search posts by text

### Likes & Dislikes
- Like or dislike a post

### Comments
- Leave a comment on a post

## Tech Stack
- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: NestJS + Firebase Firestore + Redis
- **Database**: Firestore (NoSQL)
- **Authentication**: Firebase Auth (Email, Google, and optionally SMS-based authentication)
- **Deployment**:
  - **Frontend**: Firebase Hosting
  - **Backend**: Firebase Functions
  - **Database**: Firebase Firestore

## License
This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.
© 2025 Volodymyr Shevel
You are free to use, modify, and distribute this software, but if you run a modified version of it over a network (e.g. as a web service), **you are required to make the source code available to users**.
For more details, see the full license text in the [LICENSE](./LICENSE) file or visit [https://www.gnu.org/licenses/agpl-3.0.html](https://www.gnu.org/licenses/agpl-3.0.html).
