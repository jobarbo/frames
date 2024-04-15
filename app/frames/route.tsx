import {Button} from "frames.js/next";
import {frames} from "./frames";

const handleRequest = frames(async (ctx) => {
	return {
		image: <span>{ctx.pressedButton ? `I clicked ${ctx.searchParams.value}` : `Click some button`}</span>,
		buttons: [
			<Button action='post' target={{query: {value: "yes"}}}>
				Say Yes
			</Button>,
			<Button action='post' target={{query: {value: "no"}}}>
				Say No
			</Button>,
		],
	};
});

export const GET = handleRequest;
export const POST = handleRequest;
