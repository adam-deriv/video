import { createSignal } from "solid-js";
import Input from "../components/Input";
import './VideoAccountProfile.scss';

const [name, setName] = createSignal("Balamurali");
const [lastName, setLastName] = createSignal("A");
const [email, setEmail] = createSignal("13bala90@gmail.com");

export default function VideoAccountProfile() {
    return (
        <div className="accountProfileWrapper">
            <div className="avatarWrapper">
                <div className="avatar">
                    <div className="avatarImage" />
                </div>
                <div className="avatarOptions" />
            </div>
            <div className="accountInfo">
                <div className="accountInfoItem">
                    <Input defaultValue={name()}
                        onChange={(e) => setName(e.target.value)}
                        title="First Name"
                        placeholder="First Name"
                        className="accountInfoInput"
                    /></div>
                <div className="accountInfoItem">
                    <Input defaultValue={lastName()}
                        onChange={(e) => setLastName(e.target.value)}
                        title="Last Name"
                        placeholder="Last Name"
                        className="accountInfoInput"
                    /></div>
                <div className="accountInfoItem">
                    <Input defaultValue={email()}
                        onChange={(e) => setEmail(e.target.value)}
                        title="Email"
                        placeholder="Email"
                        className="accountInfoInput"
                    /></div>
            </div>
            <div className="accountInfoSave">
                <button className="buttonApp">Save Changes</button>
            </div>
        </div>
    )
}
