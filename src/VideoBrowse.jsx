export default function VideoBrowse() {
    return (
        <div className="mainWrapper">
            <div className="topBar">
                <div className="topBarTitle">Saved Videos</div>
                <div className="topBarRight">
                    <button className="buttonApp" onClick={() => console.log('create new')}>Create New</button>
                </div>
            </div>
        </div>
    )
};
