import { frontPageBackgroundUrl } from "../../../constants/backgroundUrls";

import BigCover from "../../components/big-cover/BigCover";

const helmet = "b.art",
    subtitle = "The pure taste of",
    title = "Sweet life",
    text =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

function FrontPage() {
    return (
        <BigCover
            imageUrl={frontPageBackgroundUrl}
            helmet={helmet}
            subtitle={subtitle}
            title={title}
            text={text}
        />
    );
}

export default FrontPage;
