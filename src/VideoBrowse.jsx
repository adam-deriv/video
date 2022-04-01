export default function VideoBrowse() {
    return (
        <div className="mainWrapper">
            <div className="topBar">
                <div className="topBarTitle">Saved Videos</div>
                <div className="topBarRight">
                    <button className="buttonApp" onClick={() => console.log('create new')}>Create New</button>
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
};
