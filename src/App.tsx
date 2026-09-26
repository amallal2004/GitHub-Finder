import { useEffect, useState } from "react"
import Bar from "./components/Bar"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import SearchBar from "./components/SearchBar"
import { Wedget } from "./components/Wedget"
import UserProfile from "./components/UserProfile"
import UserNotFound from "./components/UserNotFound"

const GITHUB_API_BASE_URL = "https://api.github.com"

export interface GitHubUser {
  login: string,
  id: number,
  avatar_url: string,
  html_url: string,
  name: string | null,
  bio: string | null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  location: string | null,

}

function HeroContent({
  setUsername,
  username,
  user,
  setUser,
  onEnter,
  error,
  onClear
}: {
  setUsername: (username: string) => void,
  username: string | null,
  user: GitHubUser | null,
  setUser: (user: GitHubUser | null) => void,
  onEnter: (keyword: string) => void,
  error: string | null,
  onClear: () => void
}) {

  const initialState = !user && !error;

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10">
      <Wedget title="GITHUB USER LOOK" size="sm" />

      {initialState && (
        <>
          <h1 className="text-white text-center font-bold text-5xl font-[space_mono]">
            Find Any <span className="text-primary">GitHub</span>
            <br />Developer
          </h1>
          <p className="text-gray-400 text-lg font-light font-mono">Search public GitHub profiles by username.</p>
        </>
      )}

      <SearchBar onEnter={onEnter} onSubmit={(keyword) => setUsername(keyword)} />
        
      {user && <UserProfile
        img={user.avatar_url}
        name={user.name || user.login}
        username={user.login}
        bio={user.bio || "No Bio"}
        location={user.location || "No Location"}
        github={user.html_url}
        repos={user.public_repos}
        gists={user.public_gists}
        followers={user.followers}
        following={user.following}
        setSearchUser={setUser}
      />}
      
      {error && <UserNotFound error={error} username={username} onClear={onClear} />}
      {initialState && <Bar />}

    </div>
  )
}

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    if (username) {
      const fetchData = async () => {
        try {
          const res = await fetch(`${GITHUB_API_BASE_URL}/users/${username}`);

          if (!res.ok) {
            setError(`User "${username}" not found`);
            throw new Error(`User "${username}" not found`);
          }

          const data = await res.json();
          console.log(data);
          setUser(data);
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          }
        }
      }
      fetchData();
      console.log(user);
    }
  }, [username])

  function handileEnter(keyword: string) {
    setUsername(keyword)
  }

  function clearUser() {
    setUser(null)
    error && setError(null)
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-between h-screen w-full">
      <Nav />
      <HeroContent onClear={clearUser} error={error} onEnter={handileEnter} user={user} setUser={setUser} setUsername={setUsername} username={username} />
      <Footer />
    </div>
  )
}

export default App