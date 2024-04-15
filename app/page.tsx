import {getFrameMetadata} from "@coinbase/onchainkit";
import type {Metadata} from "next";

const frameMetadata = getFrameMetadata({
	buttons: [
		{
			label: "Begin",
		},
	],
	image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmdKmNJVsQuEcTmsDm5K6G1pcvwPydYUXWacFmCFMY5uz1/0.jpg`,
	post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
	title: "Cosmic Cowboys",
	description: "A frame telling the story of Cosmic Cowboys",
	openGraph: {
		title: "Cosmic Cowboys",
		description: "A frame telling the story of Cosmic Cowboys",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmdKmNJVsQuEcTmsDm5K6G1pcvwPydYUXWacFmCFMY5uz1/0.jpg`,
				width: 800,
				height: 600,
				alt: "Cosmic Cowboys",
			},
		],
	},
	other: {
		...frameMetadata,
	},
};

export default function Page() {
	return (
		<div>
			<h1>Cosmic Cowboys</h1>
		</div>
	);
}
