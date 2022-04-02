export default function VideoAccount() {
    return (
        <div className="mainWrapper">
            <div className="topBar">
                <div className="topBarTitle">My Account</div>
                <div className="topBarRight">
                    <button className="logountButton" onClick={() => console.log('logout')}>Logout</button>
                </div>
            </div>
            <div className="accountTabs">
                <span className="accountTab">
                    Profile
                </span>
                <span className="accountTab">
                    My Plan
                </span>
                <span className="accountTab">
                    Billing
                </span>
            </div>
        </div>
    )
}