import ReactFullpage from '@fullpage/react-fullpage';
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import Rsvp from "../components/rsvp";
import Location from "../components/location";
import Gift from "../components/gift";
import DressCode from '../components/dressCode';

const Index = () => {
    return (
        <Layout pageTitle="Ursu & David">
            <Header />
            <ReactFullpage
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000}
                dragAndMove={true}
                anchors={['hero', 'location', 'gift', 'dress', 'rsvp']}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Hero />
                            <Location />                            
                            <Gift />
                            <DressCode />
                            <Rsvp />
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </Layout>
    )
}

export default Index;