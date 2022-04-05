import { useSelector } from "@xstate/react";
import { Suspense } from "react";
import { appService } from "../appService";
import Loading from "../components/Loading";
import './VideoAccount.scss';
import VideoAccountBilling from "./VideoAccountBilling";
import VideoAccountPlan from "./VideoAccountPlan";
import VideoAccountProfile from "./VideoAccountProfile";


const isAccountProfileSelector = (state) => state.matches('video.account.profile');
const isAccountPlanSelector = (state) => state.matches('video.account.plan');
const isAccountBillingSelector = (state) => state.matches('video.account.billing');

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
            <div className="accountContent">
                <VideoAccountContent />
            </div>
        </div>
    )
}

function VideoAccountContent() {
    const isAccountProfile = useSelector(appService, isAccountProfileSelector);
    const isAccountPlan = useSelector(appService, isAccountPlanSelector);
    const isAccountBilling = useSelector(appService, isAccountBillingSelector);
    if (isAccountProfile) return (
        <Suspense fallback={<Loading />}><VideoAccountProfile /></Suspense>
    )
    if (isAccountPlan) return (
        <Suspense fallback={<Loading />}><VideoAccountPlan /></Suspense>
    )
    if (isAccountBilling) return (
        <Suspense fallback={<Loading />}><VideoAccountBilling /></Suspense>
    )
    return (
        <Loading />
    )
}
