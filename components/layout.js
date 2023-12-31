import dynamic from 'next/dynamic';
import { useState } from 'react';
const Navbar = dynamic(() => import('./elements/navbar'), { ssr: false });
const Footer = dynamic(() => import('./elements/footer'), { ssr: false });
const NotificationBanner = dynamic(() =>
	import('./elements/notification-banner', { ssr: false })
);
const WhatsAppButton = dynamic(() => import('./elements/whatsapp-button'), {
	ssr: false
});
import {
	notificationBanner,
	whatsappImage,
	whatsappContacts,
	whatsappMsg,
	showInitModal
} from 'data/global';

const InitModal = dynamic(() => import('/components/elements/init-modal'), {
	ssr: false
});

const Layout = ({ children }) => {
	const [bannerIsShown, setBannerIsShown] = useState(true);
	const [shown, setShown] = useState();

	return (
		<div className="flex flex-col justify-between ">
			<div className="flex-1">
				<div className="fixed w-full z-50">
					<Navbar />
				</div>
				{!shown && showInitModal && <InitModal closeSelf={() => setShown(true)} />}
				<div className="relative z-10">{children}</div>
			</div>
			<Footer />
			{whatsappImage && whatsappContacts.length && whatsappMsg && (
				<WhatsAppButton
					media={whatsappImage}
					contatos={whatsappContacts}
					msg={whatsappMsg}
				/>
			)}
			{notificationBanner && bannerIsShown && (
				<NotificationBanner
					data={notificationBanner}
					closeSelf={() => setBannerIsShown(false)}
				/>
			)}
		</div>
	);
};

export default Layout;
