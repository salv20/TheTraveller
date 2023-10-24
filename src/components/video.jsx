import { DefaultPlayer as Video } from "react-html5video"
import 'react-html5video/dist/styles.css'

const VideoPage = () => {
    return (
        <section className=" bg-heading absolute h-full w-full">
            <div className="mx-auto pt-20 lg:pt-10 w-3/4 lg:w-3/5">
                <Video autoPlay loop muted
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    poster="http://sourceposter.jpg"
                >
                    <source src="/VID.mp4" type="video/mp4" />
                </Video>
            </div>
        </section>
    )
}

export default VideoPage
