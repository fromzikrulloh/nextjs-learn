import Layout from "../components/Layout";

const MainLayout = (props) => {
    return (
        <>
            <Layout.Header />
            <Layout.Sidebar />
            {props.children}
            <Layout.Footer />
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    const token = ctx.req.cookies.get("authToken");
    if (!token) {
        return {
            props: {
                isAuth: false,
            },
        };
    }
    return {
        props: {
            data: null,
        },
    };
};

export default MainLayout;
