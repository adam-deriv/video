import Input from "./components/Input";

export default function VideoAccountProfile() {
    return (
        <div className="mainWrapper">
            <div className="avatarWrapper">
                <div className="avatar">
                    <div className="avatarImage" />
                </div>
                <div className="avatarOptions" />
            </div>
            <div className="accountInfo">
                <div className="accountInfoItem"><Input title="First Name" placeholder="First Name" /></div>
                <div className="accountInfoItem"><Input title="Last Name" placeholder="Last Name" /></div>
                <div className="accountInfoItem"><Input title="Email" placeholder="Email" /></div>
            </div>
            <div className="accountInfoSaveWrapper">
                <div className="accountInfoSave">
                    <button className="buttonApp">Save Changes</button>
                </div>
            </div>
        </div>
    )
}