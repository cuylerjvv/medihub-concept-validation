
import Nav_logged_in from "@components/Nav_logged_in"
import Home_content from "@components/Home_content"
import Contact_form from "@components/Contact_form"
import Video_logged_in from "@components/Video_logged_in"

export default function Home() {
    return (
        <div>
            <Nav_logged_in />
            <Home_content />
            {/* <Video_logged_in /> */}
            <Contact_form />
        </div>

    )
}
