import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

type Props = {
    showFooterHeaders?: boolean
}

export default function Footer({ showFooterHeaders = true }: Props) {
    return (
        <footer className={showFooterHeaders ? "flex flex-col justify-between w-[100%] bg-[#FB4A04] text-[#ffffff] xsm:h-auto sm:h-auto h-auto" : "flex flex-col justify-between w-[100%] bg-[#FB4A04] text-[#ffffff] xsm:h-auto"}>
            {
                showFooterHeaders &&
                <motion.div className='w-[90%] mb-[77px] m-auto flex justify-around mt-[55px] xsm:flex-col flex-wrap xsm:gap-[40px] sm:gap-[40px]'>
                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px] xsm:mb-[15px]'>Use Site</h3>
                        <HashLink smooth to="/community-join#top-vibe">
                            <motion.li whileHover={{ color: "#473a3a" }}>Partymode vibe check</motion.li>
                        </HashLink>
                        <Link to={'/subscription-and-pricing'}>
                            <motion.li whileHover={{ color: "#473a3a" }}>Pricing</motion.li>
                        </Link>
                        <Link to="/ticket">
                            <motion.li whileHover={{ color: "#473a3a" }}>Partymode mobile ticket</motion.li>
                        </Link>
                        <a href="https://partymode.com/" target="_blank">
                            <motion.li whileHover={{ color: "#473a3a" }}>Partymode marketplace</motion.li>
                        </a>
                        <a href="https://partymoderadio.com/" target="_blank">
                            <motion.li whileHover={{ color: "#473a3a" }}>Partymode Radio</motion.li>
                        </a>
                        <HashLink smooth to={'/subscription-and-pricing#faq'}>
                            <motion.li whileHover={{ color: "#473a3a" }}>FAQ</motion.li>
                        </HashLink>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px] '>Plan Events</h3>
                        <Link to="/ticket">
                            <motion.li whileHover={{ color: "#473a3a" }}>Sell tickets online</motion.li>
                        </Link>
                        <Link to="/help-sub">
                            <motion.li whileHover={{ color: "#473a3a" }}>Live streaming events</motion.li>
                        </Link>
                        <Link to="/create-event">
                            <motion.li whileHover={{ color: "#473a3a" }}>Create event</motion.li>
                        </Link>
                        <Link to="/subscription-and-pricing">
                            <motion.li whileHover={{ color: "#473a3a" }}>Event payment</motion.li>
                        </Link>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px] '>Find Events</h3>
                        <Link to="/help-sub">
                            <motion.li whileHover={{ color: "#473a3a" }}>Live streaming</motion.li>
                        </Link>
                        <Link to="/">
                            <motion.li whileHover={{ color: "#473a3a" }}>Online events</motion.li>
                        </Link>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px]'>Connect With Us</h3>
                        <motion.li whileHover={{ color: "#473a3a" }}><a target={"_blank"}>Contact support</a></motion.li>
                        <motion.li whileHover={{ color: "#473a3a" }}><a href="https://fb.watch/gJthIVVA0p/" target={"_blank"}>Facebook</a></motion.li>
                        <motion.li whileHover={{ color: "#473a3a" }}><a href="https://www.instagram.com/reel/Ckt0HO0jwUt/?igshid=YmMyMTA2M2Y=" target={"_blank"}>Instagram</a></motion.li>
                        <motion.li whileHover={{ color: "#473a3a" }}><a target={"_blank"}>LinkedIn</a></motion.li>
                        <motion.li whileHover={{ color: "#473a3a" }}><a href="https://vm.tiktok.com/ZMFPkXUYS/" target={"_blank"}>TikTok</a></motion.li>
                        <motion.li whileHover={{ color: "#473a3a" }}><a href="https://twitter.com/partymode_/status/1579279888879878147?s=12&t=-jK89kyXLwS-ennKAld_Sw" target={"_blank"}>Twitter</a></motion.li>
                        <motion.li whileHover={{ color: "#473a3a" }}><a href="https://open.spotify.com/track/3UGNdLrhhsK0SY9gNqe8TT?si=RBDLUrG-R8CqHlZrz865rw" target={"_blank"}>Podcast</a></motion.li>
                    </ul>
                </motion.div>
            }

            <div className='mb-[31px] m-auto flex flex-col items-center mt-[31px]'>
                <div className="w-[58.44380403458213vw] xsm:min-w-[95vw] flex gap-[5px] flex-wrap justify-center">
                    <motion.p whileHover={{ color: "#473a3a" }} className="cursor-pointer">Terms</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{ color: "#473a3a" }} className="cursor-pointer">Privacy</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{ color: "#473a3a" }} className="cursor-pointer">About</motion.p>
                </div>
                <motion.p whileHover={{ color: "#473a3a" }} className="mt-[22px]">© 2022 Partymode</motion.p>
            </div>
        </footer>
    )
}