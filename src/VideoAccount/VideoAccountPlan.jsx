import { useSelector } from '@xstate/react';
import { appService } from '../appService';
import './VideoAccountPlan.scss';

export default function VideoAccountPlan() {
    return (
        <div className="mainWrapper">
            <div className="plans">
                <div className="plan free">
                    <div className="planTitle">
                        Free
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Pellentesque interdum libero et
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Pellentesque posuere jdfkdfkdfhd
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Cras sed felis eget
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Maecenas eget luctus
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Nullam vitae augue
                        </div>
                    </div>
                    <div className="planPrice" >
                        <div className="planPriceCurrency">$</div>
                        <div className="planPriceValue">0</div>
                    </div>
                    <div className="planButtonWrapper">
                        <button onClick={() => appService.send('FREE')} className="planButton"><Plan source='free' /></button>
                    </div>
                </div>
                <div className="plan pro">
                    <div className="planTitle">
                        Pro
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Maecenas eget luctus purus
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Graesent in sollicitudin velit
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Donec in orci vitae nisi
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Class aptent taciti
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconNo" />
                        <div className="planDetailSentence">
                            Ut blandit vestibulum
                        </div>
                    </div>
                    <div className="planPrice" >
                        <div className="planPriceCurrency">$</div>
                        <div className="planPriceValue">12</div>
                    </div>
                    <div className="planButtonWrapper">
                        <button onClick={() => appService.send('PRO')} className="planButton"><Plan source='pro' /></button>
                    </div>
                </div>
                <div className="plan team">
                    <div className="planTitle">
                        Team
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Etiam ac finibus nisi, a porttitor
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Quisque tincidunt velit a sapien vulputate
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Vivamus pulvinar
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            In hac habitasse platea
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconNo" />
                        <div className="planDetailSentence">
                            Nullam vitae augue
                        </div>
                    </div>
                    <div className="planPrice" >
                        <div className="planPriceCurrency">$</div>
                        <div className="planPriceValue">23</div>
                    </div>
                    <div className="planButtonWrapper">
                        <button onClick={() => appService.send('TEAM')} className="planButton"><Plan source='team' /></button>
                    </div>
                </div>
                <div className="plan agency">
                    <div className="planTitle">
                        Agency
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Praesent in sollicitudin velit
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Nulla tincidunt finibus interdum
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Nullam vitae augue
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                            Curabitur eleifend
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconNo" />
                        <div className="planDetailSentence">
                            Quisque vel ex enim
                        </div>
                    </div>
                    <div className="planPrice" >
                            <div className="planPriceCurrency">$</div>
                            <div className="planPriceValue">43</div>
                    </div>
                    <div className="planButtonWrapper">
                        <button onClick={() => appService.send('AGENCY')} className="planButton"><Plan source='agency' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const isAccountPlanFreeSelector = (state) => state.matches('video.account.plan.free');
const isAccountPlanProSelector = (state) => state.matches('video.account.plan.pro');
const isAccountPlanTeamSelector = (state) => state.matches('video.account.plan.team');
const isAccountPlanAgencySelector = (state) => state.matches('video.account.plan.agency');

const Plan = ({source}) => {
    const isAccountPlanFree = useSelector(appService, isAccountPlanFreeSelector);
    const isAccountPlanPro = useSelector(appService, isAccountPlanProSelector);
    const isAccountPlanTeam = useSelector(appService, isAccountPlanTeamSelector);
    const isAccountPlanAgency = useSelector(appService, isAccountPlanAgencySelector);
    if (source === 'free' && isAccountPlanFree) return 'Current plan';
    if (source === 'pro' && isAccountPlanPro) return 'Current plan';
    if (source === 'team' && isAccountPlanTeam) return 'Current plan';
    if (source === 'agency' && isAccountPlanAgency) return 'Current plan';
    if (source === 'free' && !isAccountPlanFree) return 'Downgrade';
    if (source === 'pro' && isAccountPlanFree) return 'Upgrade';
    if (source === 'pro' && isAccountPlanTeam) return 'Downgrade';
    if (source === 'pro' && isAccountPlanAgency) return 'Downgrade';
    if (source === 'team' && isAccountPlanFree) return 'Upgrade';
    if (source === 'team' && isAccountPlanPro) return 'Upgrade';
    if (source === 'team' && isAccountPlanAgency) return 'Downgrade';
    if (source === 'agency' && isAccountPlanTeam) return 'Upgrade';
    if (source === 'agency' && isAccountPlanPro) return 'Upgrade';
    if (source === 'agency' && isAccountPlanFree) return 'Upgrade';
    return 'Downgrade';
}


