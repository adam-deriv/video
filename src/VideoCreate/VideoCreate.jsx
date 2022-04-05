import { appService } from '../appService'
import './VideoCreate.scss'

export default function VideoCreate() {
    return (
        <div className="mainWrapper">
            <div className="topBar">
                <div className="topBarTitle">Saying Hi to my customers</div>
                <div className="topBarRight">
                    <button className="buttonAppSecondary" onClick={() => appService.send('GO_BROWSE')}>Save</button>
                    <button className="buttonApp" onClick={() => appService.send('GO_BROWSE')}>Save</button>
                </div>
            </div>
            <div className="videoList">
                <div className="videoItem">
                    <div className="videoItemImage">
                        <div className="videoItemOptions">
                            <div className="videoItemOption">
                                <button className="buttonApp">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="videoItemTitle">
                        Saying Hi to users!
                    </div>
                    <div className="videoItemTags">
                        <div className="videoItemTag">
                            Email
                        </div>
                        <div className="videoItemTag">
                            Marketing
                        </div>
                        <div className="videoItemTag">
                            Greeting
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}