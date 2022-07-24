import ReactFullpage from '@fullpage/react-fullpage';
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import Rsvp from "../components/rsvp";
import Location from "../components/location";
import Gift from "../components/gift";

const Index = () => {
    return (
        <Layout pageTitle="Ursu & David">
            <Header />
            <ReactFullpage
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000}
                dragAndMove
                anchors={['hero', 'location', 'rsvp', 'gift']}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Hero />
                            <Location />
                            <Rsvp />
                            <Gift />
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </Layout>
    )
}

export default Index;