import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import Rsvp from "../components/rsvp";
import Location from "../components/location";

const Index = () => {
    return (
        <Layout pageTitle="Ursu & David">
            <Header />
            <Hero />
            <Location />
            <Rsvp />
        </Layout>
    )
}

export default Index;