import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import {
    EmailShareButton, EmailIcon,
    FacebookShareButton, FacebookIcon,
    TelegramShareButton, TelegramIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    RedditShareButton, RedditIcon
} from 'react-share'
const ShareModal = ({ url, setShare }) => {
    return (
        <>

            <div className="home-pop">
                <i onClick={() => setShare(false)} className="fa-solid fa-xmark"></i>
                <div className="pop-cont">
                    <OutsideClickHandler onOutsideClick={()=>{
                        setShare(false);
                    }}>
                    <div>
                        <div className=" flex justify-between px-4 py-2 ">

                            <FacebookShareButton url={url}>
                                <FacebookIcon round={true} size={32} />
                            </FacebookShareButton>

                            <TwitterShareButton url={url}>
                                <TwitterIcon round={true} size={32} />
                            </TwitterShareButton>

                            <EmailShareButton url={url}>
                                <EmailIcon round={true} size={32} />
                            </EmailShareButton>

                            <RedditShareButton url={url}>
                                <RedditIcon round={true} size={32} />
                            </RedditShareButton>

                            <TelegramShareButton url={url}>
                                <TelegramIcon round={true} size={32} />
                            </TelegramShareButton>

                            <WhatsappShareButton url={url}>
                                <WhatsappIcon round={true} size={32} />
                            </WhatsappShareButton>
                        </div>
                    </div>
                    </OutsideClickHandler>
                </div>
            </div>
        </>
    )
}

export default ShareModal