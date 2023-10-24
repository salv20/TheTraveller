import { DefaultPlayer as Video } from "react-html5video"
import 'react-html5video/dist/styles.css'

const VideoPage = () => {
    return (
        <div className="mx-auto mt-10 w-3/4">
            <Video autoPlay loop muted
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster="http://sourceposter.jpg"
            >
                <source src="/VID.mp4" type="video/mp4" />
            </Video>
        </div>
    )
}

export default VideoPage
