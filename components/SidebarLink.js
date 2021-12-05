const SidebarLink = ({ text, Icon, active }) => {
	return (
		<div
			className={`flex items-center text-xl xl:justify-start space-x-2 hoverAnimation ${
				active && "font-bold"
			}`}>
			<Icon className="h-7 text-white space-x-3" />
			<span className="hidden text-white xl:inline ">{text}</span>
		</div>
	);
};

export default SidebarLink;
