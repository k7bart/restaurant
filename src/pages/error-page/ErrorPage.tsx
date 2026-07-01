import { errorPageBackgroundUrl } from "../../constants/backgroundUrls";
import BigCover from "../../components/big-cover/BigCover";

const ErrorPage = () => (
    <BigCover
        imageUrl={errorPageBackgroundUrl}
        helmet="Error"
        subtitle="Oops!"
        title="404"
        text="We couldn't find the page you were looking for. Maybe it's hiding in the kitchen. In the meantime, why not check out our menu?"
    />
);

export default ErrorPage;
