import { errorPageBackgroundUrl } from "../../../constants/backgroundUrls";

import BigCover from "../../components/big-cover/BigCover";

const helmet = "Error",
    subtitle = "Oops!",
    title = "404",
    text =
        "We couldn't find the page you were looking for. Maybe it's hiding in the kitchen. In the meantime, why not check out our menu?";

const ErrorPage = () => {
    return (
        <BigCover
            imageUrl={errorPageBackgroundUrl}
            helmet={helmet}
            subtitle={subtitle}
            title={title}
            text={text}
        />
    );
};

export default ErrorPage;
