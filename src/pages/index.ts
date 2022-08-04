import Authentication from './Authentication';
import Initialization from './Initialization';
import Complete from './Complete';

const pages: Record<string, () => JSX.Element> = {
    authentication: Authentication,
    complete: Complete,
    initialization: Initialization,
};

export default pages;
