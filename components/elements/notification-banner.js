import { MdClose } from 'react-icons/md';

const NotificationBanner = ({ data: { text }, closeSelf }) => {
	return (
		<div
			id="notification-banner"
			className="text-yellow-300 px-2 fixed w-full z-40 py-5 bg-opacity-90 bottom-0 bg-black"
		>
			<div className="container flex flex-row justify-between items-center ">
				<p className="text-xl">{text}</p>
				<button
					onClick={closeSelf}
					className="px-1 py-1 flex-shrink-0"
					aria-label="Fechar notificação de cookies"
				>
					<MdClose className="h-6 w-auto" color="#fff" />
				</button>
			</div>
		</div>
	);
};

export default NotificationBanner;
