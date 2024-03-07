import AddArticleForm from "../components/admin/AddArticleForm";
import Nav from "../components/header/Nav";

const Admin = () => {
    return (<>
        <Nav />
        <h1>hier is the admin Seite</h1>
        <AddArticleForm />
    </>);
}

export default Admin;