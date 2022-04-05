import { appService } from "./appService";

export default function VideoAccount() {
    return (
        <div className="mainWrapper">
            <div className="topBar">
                <div className="topBarTitle">My Account</div>
                <div className="topBarRight">
                    <button className="buttonLogout" onClick={() => appService.send('LOGOUT')}>Logout</button>
                </div>
            </div>
            <div className="accountTabs">
                <span className="accountTab accountProfile" onClick={() => appService.send('GO_PROFILE')}>
                    Profile
                </span>
                <span className="accountTab accountPlan" onClick={() => appService.send('GO_PLAN')}>
                    My Plan
                </span>
                <span className="accountTab accountBilling" onClick={() => appService.send('GO_BILLING')}>
                    Billing
                </span>
            </div>
        </div>
    )
}