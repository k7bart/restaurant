import { frontPageBackgroundUrl } from "../../constants/backgroundUrls";

import BigCover from "../../components/big-cover/BigCover";

function FrontPage() {
    return (
        <BigCover
            imageUrl={frontPageBackgroundUrl}
            helmet="b.art"
            subtitle="The pure taste of"
            title="Sweet life"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        />
    );
}

export default FrontPage;
