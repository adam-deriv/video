import './VideoAccountPlan.scss';

export default function VideoAccountPlan() {
    return(
        <div className="mainWrapper">
            <div className="plans">
                <div className="plan">
                    <div className="planTitle">
                        Free
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                        &nbsp;Pellentesque interdum &nbsp;libero et
                        </div>
                    </div>
                    <div className="planDetail">
                        <div className="planDetailIconYes" />
                        <div className="planDetailSentence">
                        &nbsp;Pellentesque posuere &nbsp;jdfkdfkdfhd
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
                    <div className="planButtonDowngrade"><button className="planButton">Downgrade</button></div>
                </div>
            </div>
        </div>
    )
}
