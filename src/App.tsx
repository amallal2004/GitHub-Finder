import { useEffect, useState } from "react"
import Bar from "./components/Bar"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import SearchBar from "./components/SearchBar"
import { Wedget } from "./components/Wedget"
import UserProfile from "./components/UserProfile"

const GITHUB_API_BASE_URL = "https://api.github.com"

interface GitHubUser {
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

function HeroContent({ setUsername, user,setUser }: { setUsername: (username: string) => void, user: GitHubUser | null,setUser:(user:GitHubUser | null) => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10">
      <Wedget title="GITHUB USER LOOK" size="sm" />

      {user ?
        <>
          <SearchBar onSubmit={(keyword) => setUsername(keyword)} />
          <UserProfile
            img={user.avatar_url}
            name={user.name}
            username={user.login}
            bio={user.bio || "No Bio"}
            location={user.location || "No Location"}
            github={user.html_url}
            repos={user.public_repos}
            gists={user.public_gists}
            followers={user.followers}
            following={user.following}
            setSearchUser={setUser}
          />
        </>
        :
        <>
          <h1 className="text-white text-center font-bold text-5xl font-[space_mono]">
            Find Any <span className="text-primary">GitHub</span>
            <br />Developer
          </h1>
          <p className="text-gray-400 text-lg font-light font-mono">Search public GitHub profiles by username.</p>
          <SearchBar onSubmit={(keyword) => setUsername(keyword)} />
          <Bar />
        </>

      }

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

  return (
    <div className="flex flex-col gap-5 items-center justify-between h-screen w-full">
      <Nav />
      <HeroContent user={user} setUser={setUser} setUsername={setUsername} />
      <Footer />
    </div>
  )
}

export default App