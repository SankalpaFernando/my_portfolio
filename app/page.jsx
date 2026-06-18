import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Logo from "@/components/Logo"
import Projects from "@/components/Projects"
import Timeline from "@/components/Timeline"
import { Button } from "@/components/ui/button"
import Post from "@/components/Post"
import Volunteer from "@/components/Volunteer"
import Contact from "@/components/Contact"
import BubbleCursor from "@/components/BubbleCursor"
import { getMyPost } from "@/lib/backend"
export default async function Home() {

  const posts = await getMyPost();
  console.log("Post",posts);

  return (
    <div id="myContainer">
      <Header/>
      <Hero/>
      <Logo/>
      <Timeline/>
      <Projects/>
      <Post posts={posts} />
      <Volunteer/>
      <Contact/>
      {/* <BubbleCursor wrapperElement={document.getElementById('myContainer')} /> */}
    </div>
  )
}
